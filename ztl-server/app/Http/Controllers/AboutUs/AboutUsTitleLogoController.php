<?php

namespace App\Http\Controllers\AboutUs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlAboutUsTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class AboutUsTitleLogoController extends Controller
{
     public function index()
    {
                $count = ZtlAboutUsTitleLogo::orderBy('id','desc')->get()->count();

        $about = ZtlAboutUsTitleLogo::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
             'count'=>$count,

            'about' => $about
         ]);
    }

    
    public function store(Request $request)
    {

            $about = new ZtlAboutUsTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/about/',$filename);
            $about->image =$filename ;
         } 

           $about->title_name = $request->title_name;
            $about->save();

                $count = ZtlAboutUsTitleLogo::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                'message' => 'About Us Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $about = ZtlAboutUsTitleLogo::find($id);

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

             $update_about=ZtlAboutUsTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/about/', $name);
        }
           
            $update_about->title_name = $request->title_name;
            if($files!=null){
             $update_about->image=$name;

            }
            $update_about->update();

 return response()->json([
                'status' => 200,
                'message' => 'About Us Title & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $about = ZtlAboutUsTitleLogo::find($id);
        $file=$about->image;
        $filename = public_path().'/images/about/'.$file;
        File::delete($filename);

        $about->delete();
            return response()->json([
                'status' => 200,
                'message' => 'About Us Title & Banner deleted successfully',
            ]);

    
    }
}
