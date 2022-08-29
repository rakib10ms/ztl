<?php

namespace App\Http\Controllers\WeDdevelopment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlWebDevelopmentTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class WebDevelopmentTitleLogoController extends Controller
{
     public function index()
    {
        $webdev = ZtlWebDevelopmentTitleLogo::orderBy('id','desc')->get();
         $count= ZtlWebDevelopmentTitleLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'webdev' => $webdev
         ]);
    }

    
    public function store(Request $request)
    {

            $webdev = new ZtlWebDevelopmentTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/webdevcare/',$filename);
            $webdev->image =$filename ;
         } 

           $webdev->title_name = $request->title_name;
            $webdev->save();
         $count= ZtlWebDevelopmentTitleLogo::orderBy('id','desc')->get()->count();


 return response()->json([
                'status' => 200,
                           'count'=>$count,

                'message' => 'Web Development Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $webdev = ZtlWebDevelopmentTitleLogo::find($id);

        if ($webdev)
        {
            return response()->json([
                'status' => 200,
                'webdev' => $webdev,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No webdev Found',
            ]);
        }

    }

public function update(Request $request,$id){

             $update_webdev=ZtlWebDevelopmentTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/webdevcare/', $name);
        }
           
            $update_webdev->title_name = $request->title_name;
            if($files!=null){
             $update_webdev->image=$name;

            }
            $update_webdev->update();

 return response()->json([
                'status' => 200,
                'message' => 'Web DevelopmentTitle & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $webdev = ZtlWebDevelopmentTitleLogo::find($id);
        $file=$webdev->image;
        $filename = public_path().'/images/webdevcare/'.$file;
        File::delete($filename);

        $webdev->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Web Development Title & Banner deleted successfully',
            ]);

    
    }
}
