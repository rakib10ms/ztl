<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlCaseStudyTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class CaseStudiesTitleLogoController extends Controller
{
     public function index()
    {
        $case= ZtlCaseStudyTitleLogo::orderBy('id','desc')->get();
         $count= ZtlCaseStudyTitleLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'case' => $case
         ]);
    }

    
    public function store(Request $request)
    {

            $case= new ZtlCaseStudyTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/webdevcare/',$filename);
            $case->image =$filename ;
         } 

           $case->title_name = $request->title_name;
            $case->save();
         $count= ZtlCaseStudyTitleLogo::orderBy('id','desc')->get()->count();


 return response()->json([
                'status' => 200,
                           'count'=>$count,

                'message' => 'case Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $case= ZtlCaseStudyTitleLogo::find($id);

        if ($case)
        {
            return response()->json([
                'status' => 200,
                'case' => $case,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No caseFound',
            ]);
        }

    }

public function update(Request $request,$id){

             $case=ZtlCaseStudyTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/webdevcare/', $name);
        }
           
            $case->title_name = $request->title_name;
            if($files!=null){
             $case->image=$name;

            }
            $case->update();

 return response()->json([
                'status' => 200,
                'message' => 'case & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $case= ZtlCaseStudyTitleLogo::find($id);
        $file=$case->image;
        $filename = public_path().'/images/webdevcare/'.$file;
        File::delete($filename);

        $webdev->delete();
            return response()->json([
                'status' => 200,
                'message' => 'case Title & Banner deleted successfully',
            ]);

    
    }
}
