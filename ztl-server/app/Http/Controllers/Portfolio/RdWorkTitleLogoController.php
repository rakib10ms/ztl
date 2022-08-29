<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlRdWorkTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class RdWorkTitleLogoController extends Controller
{
     public function index()
    {
        $rd= ZtlRdWorkTitleLogo::orderBy('id','desc')->get();
         $count= ZtlRdWorkTitleLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'rd' => $rd
         ]);
    }

    
    public function store(Request $request)
    {

            $rd= new ZtlRdWorkTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/webdevcare/',$filename);
            $rd->image =$filename ;
         } 

           $rd->title_name = $request->title_name;
            $rd->save();
         $count= ZtlRdWorkTitleLogo::orderBy('id','desc')->get()->count();


 return response()->json([
                'status' => 200,
                           'count'=>$count,

                'message' => 'rd Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $rd= ZtlRdWorkTitleLogo::find($id);

        if ($rd)
        {
            return response()->json([
                'status' => 200,
                'rd' => $rd,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No rdFound',
            ]);
        }

    }

public function update(Request $request,$id){

             $rd=ZtlRdWorkTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/webdevcare/', $name);
        }
           
            $rd->title_name = $request->title_name;
            if($files!=null){
             $rd->image=$name;

            }
            $rd->update();

 return response()->json([
                'status' => 200,
                'message' => 'rd & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $rd= ZtlRdWorkTitleLogo::find($id);
        $file=$rd->image;
        $filename = public_path().'/images/webdevcare/'.$file;
        File::delete($filename);

        $webdev->delete();
            return response()->json([
                'status' => 200,
                'message' => 'rd Title & Banner deleted successfully',
            ]);

    
    }
}
