<?php

namespace App\Http\Controllers\WeDdevelopment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlWebTechnologyFrameWorkLogo;
use Illuminate\Support\Facades\Validator;
use File;
class WebTechnologyFrameWorkLogoController extends Controller
{
      public function index()
    {
                $web = ZtlWebTechnologyFrameWorkLogo::orderBy('id','desc')->get();

        $count = ZtlWebTechnologyFrameWorkLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
                      'count'=>$count,

            'web' => $web
         ]);
    }

    
    public function store(Request $request)
    {
        $count = ZtlWebTechnologyFrameWorkLogo::orderBy('id','desc')->get()->count();

            $web = new ZtlWebTechnologyFrameWorkLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $web->image =$filename ;
         } 

          
            $web->save();


 return response()->json([
                'status' => 200,
                'count'=>$count,

                'message' => 'Web Technology Image Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $web = ZtlWebTechnologyFrameWorkLogo::find($id);

        if ($web)
        {
            return response()->json([
                'status' => 200,
                'web' => $web,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No web Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $web = ZtlWebTechnologyFrameWorkLogo::find($id);

            if($request->file != ''){        
          $path = public_path().'/images/our_partners/';

          //code for remove old file
          if($web->web != null){
               $file_old = $path.$web->web;
        File::delete($file_old);
          }
      }

          //upload new file
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $web->image =$filename ;
            }

            $web->update();



    
        return response()->json([
                'status' => 200,
                'message' => 'Web Technology Image Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $web = ZtlWebTechnologyFrameWorkLogo::find($id);
        $file=$web->web;
        $filename = public_path().'/images/our_partners/'.$file;
        File::delete($filename);

        $web->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Web Technology Image  deleted successfully',
            ]);

    
    }
}
