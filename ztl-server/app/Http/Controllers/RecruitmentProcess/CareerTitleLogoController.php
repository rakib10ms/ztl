<?php

namespace App\Http\Controllers\RecruitmentProcess;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlCareerTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class CareerTitleLogoController extends Controller
{
      public function index()
    {
                $count = ZtlCareerTitleLogo::orderBy('id','desc')->get()->count();

        $career = ZtlCareerTitleLogo::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
             'count'=>$count,

            'career' => $career
         ]);
    }

    
    public function store(Request $request)
    {

            $career = new ZtlCareerTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/healthcare/',$filename);
            $career->image =$filename ;
         } 

           $career->title_name = $request->title_name;
            $career->save();

                $count = ZtlCareerTitleLogo::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                'message' => 'Career Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $career = ZtlCareerTitleLogo::find($id);

        if ($career)
        {
            return response()->json([
                'status' => 200,
                'career' => $career,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No career Found',
            ]);
        }

    }

public function update(Request $request,$id){

             $update_career=ZtlCareerTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/healthcare/', $name);
        }
           
            $update_career->title_name = $request->title_name;
            if($files!=null){
             $update_career->image=$name;

            }
            $update_career->update();

 return response()->json([
                'status' => 200,
                'message' => 'Career Title & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $career = ZtlCareerTitleLogo::find($id);
        $file=$career->image;
        $filename = public_path().'/images/healthcare/'.$file;
        File::delete($filename);

        $career->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Career Title & Banner deleted successfully',
            ]);

    
    }
}
