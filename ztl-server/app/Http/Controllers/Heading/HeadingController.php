<?php

namespace App\Http\Controllers\Heading;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlHeading;
use Illuminate\Support\Facades\Validator;
use File;
class HeadingController extends Controller
{
    public function index()
    {
        $heading = ZtlHeading::orderBy('id','desc')->get();
        $heading_count = $heading->count();

        return response()->json([
           'status' => 200,
            'heading' => $heading,
            'heading_count'=>$heading_count,

         ]);
    }

    
    public function store(Request $request)
    {

            $heading = new ZtlHeading();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('landing/heading/',$filename);
            $heading->image =$filename ;
         } 

           $heading->heading_name = $request->heading_name;
            $heading->heading_description = $request->heading_description;
            // $heading->image = $name;
            $heading->save();

        $heading = ZtlHeading::orderBy('id','desc')->get();
        $heading_count = $heading->count();
 return response()->json([
                'status' => 200,
                'count'=>$heading_count,
                'message' => 'Heading Added Successfully',
            ]);   
     }




    public function edit($id)
    {
        $heading = ZtlHeading::find($id);

        if ($heading)
        {
            return response()->json([
                'status' => 200,
                'heading' => $heading,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No Heading Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $heading = ZtlHeading::find($id);

            if($request->file != ''){        
          $path = public_path().'/landing/heading/';

          //code for remove old file
          if($heading->file != ''  && $heading->image != null){
               $file_old = $path.$heading->image;
        File::delete($file_old);
          }
      }

          //upload new file
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('landing/heading/',$filename);
            $heading->image =$filename ;
            }

           $heading->heading_name = $request->heading_name;
            $heading->heading_description = $request->heading_description;
            $heading->update();



    
        return response()->json([
                'status' => 200,
                'message' => 'Heading Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $heading = ZtlHeading::find($id);
        $file=$heading->image;
        $filename = public_path().'/landing/heading/'.$file;
        File::delete($filename);

        $heading->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Heading deleted successfully',
            ]);

    
    }

  
}
