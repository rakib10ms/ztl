<?php

namespace App\Http\Controllers\AboutUs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlAboutUsMission;
use Illuminate\Support\Facades\Validator;
use File;
class AboutUsMissionController extends Controller
{
      public function index()
    {
                $count = ZtlAboutUsMission::orderBy('id','desc')->get()->count();

        $about = ZtlAboutUsMission::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
             'count'=>$count,

            'about' => $about
         ]);
    }

    
    public function store(Request $request)
    {

            $about = new ZtlAboutUsMission();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/about/',$filename);
            $about->image =$filename ;
         } 

     

           $about->mission_description = $request->mission_description;
            $about->save();

                $count = ZtlAboutUsMission::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                'message' => 'About Us Mission  Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $about = ZtlAboutUsMission::find($id);

        if ($about)
        {
            return response()->json([
                'status' => 200,
                'about' => $about,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No about Found',
            ]);
        }

    }

public function update(Request $request,$id){

             $update_about=ZtlAboutUsMission::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/about/', $name);
        }
           
          $update_about->mission_description = $request->mission_description;
            if($files!=null){
             $update_about->image=$name;

            }
            $update_about->update();

 return response()->json([
                'status' => 200,
                'message' => 'About Us Mission  Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $about = ZtlAboutUsMission::find($id);
        $file=$about->image;
        $filename = public_path().'/images/about/'.$file;
        File::delete($filename);

        $about->delete();
            return response()->json([
                'status' => 200,
                'message' => 'About Us Mission  deleted successfully',
            ]);

    
    }
}
