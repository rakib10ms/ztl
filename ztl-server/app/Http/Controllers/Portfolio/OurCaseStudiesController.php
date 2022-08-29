<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlCaseStudy;
use Illuminate\Support\Facades\Validator;
use File;
class OurCaseStudiesController extends Controller
{
    
         public function index()
    {
        $case = ZtlCaseStudy::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
            'case' => $case
         ]);
    }

    
    public function store(Request $request)
    {


            $case = new ZtlCaseStudy();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/job_list/',$filename);
            $case->image =$filename ;
         } 

           $case->case_title = $request->case_title;
           $case->case_description = $request->case_description;
            $case->project_name = $request->project_name;
           
            $case->save();


 return response()->json([
                'status' => 200,
                'message' => 'case Added Successfully',
            ]);   
     }






   public function edit($id)
    {
        $case = ZtlCaseStudy::find($id);

        if ($case)
        {
            return response()->json([
                'status' => 200,
                'case' => $case,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No case Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $case = ZtlCaseStudy::find($id);
    if ($request->hasFile('image')) {
        if($case->image != null){
            $file_path = 'images/job_list/'.$case->image;
            if(file_exists($file_path)){
                // unlink($file_path);
                File::delete($file_path);

            }
        }
        $file = $request->file('image');
        $original_name = $file->getClientOriginalName();
        $file_name = time().rand(1,0).$original_name;
        $file->move(public_path('images/job_list/'),$file_name);
        $case->image = $file_name;


     }
           $case->case_title = $request->case_title;
           $case->case_description = $request->case_description;
            $case->project_name = $request->project_name;
           
            $case->update();


 return response()->json([
                'status' => 200,
                'message' => 'case Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $case = ZtlCaseStudy::find($id);
        $file=$case->image;
        $filename = public_path().'/images/job_list/'.$file;
        File::delete($filename);

        $case->delete();
            return response()->json([
                'status' => 200,
                'message' => 'case deleted successfully',
            ]);

    
    }

    public function getcaseItem($id){

        $case_item=ZtlCaseStudy::where('id',$id)->first();
           return response()->json([
                'status' => 200,
                'case_item' => $case_item,
            ]);

    }
}
