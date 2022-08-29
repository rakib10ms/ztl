<?php

namespace App\Http\Controllers\JobList;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlJobDescription;
use Illuminate\Support\Facades\Validator;
use File;
class JobDescriptionsController extends Controller
{
         public function index()
    {
        $jobDescription = ZtlJobDescription::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
            'jobDescription' => $jobDescription
         ]);
    }

    
    public function store(Request $request)
    {


        $validator = Validator::make($request->all(),[
            'job_id' => 'required|unique:ztl_job_descriptions',
         

        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{
            


            $jobDescription = new ZtlJobDescription();
               if($request->hasFile('job_post_logo')){
            $file=$request->file('job_post_logo');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/job_list/',$filename);
            $jobDescription->job_post_logo =$filename ;
         } 

           $jobDescription->job_tittle = $request->job_tittle;
           $jobDescription->job_id = $request->job_id;
            $jobDescription->qualification = $request->qualification;
            $jobDescription->job_description1 = $request->job_description1;
            $jobDescription->job_description2 = $request->job_description2;
            $jobDescription->job_requirements = $request->job_requirements;
            $jobDescription->job_responsibilites = $request->job_responsibilites;
            $jobDescription->save();


 return response()->json([
                'status' => 200,
                'message' => 'JobDescription Added Successfully',
            ]);   
     }
}




  





















   public function edit($id)
    {
        $jobDescription = ZtlJobDescription::find($id);

        if ($jobDescription)
        {
            return response()->json([
                'status' => 200,
                'jobDescription' => $jobDescription,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No jobDescription Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $jobDescription = ZtlJobDescription::find($id);
    if ($request->hasFile('job_post_logo')) {
        if($jobDescription->job_post_logo != null){
            $file_path = 'images/job_list/'.$jobDescription->job_post_logo;
            if(file_exists($file_path)){
                // unlink($file_path);
                File::delete($file_path);

            }
        }
        $file = $request->file('job_post_logo');
        $original_name = $file->getClientOriginalName();
        $file_name = time().rand(1,0).$original_name;
        $file->move(public_path('images/job_list/'),$file_name);
        $jobDescription->job_post_logo = $file_name;


     }
                $jobDescription->job_id = $request->job_id;
             $jobDescription->job_tittle = $request->job_tittle;
            $jobDescription->qualification = $request->qualification;
            $jobDescription->job_description1 = $request->job_description1;
            $jobDescription->job_description2 = $request->job_description2;
            $jobDescription->job_requirements = $request->job_requirements;
            $jobDescription->job_responsibilites = $request->job_responsibilites;
            $jobDescription->update();


 return response()->json([
                'status' => 200,
                'message' => 'JobDescription Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $jobDescription = ZtlJobDescription::find($id);
        $file=$jobDescription->job_post_logo;
        $filename = public_path().'/images/job_list/'.$file;
        File::delete($filename);

        $jobDescription->delete();
            return response()->json([
                'status' => 200,
                'message' => 'JobDescription deleted successfully',
            ]);

    
    }

    public function getJobDescriptionById($id){
        $jobDescription=ZtlJobDescription::where('job_id',$id)->first();


             return response()->json([
                'status' => 200,
                'jobDescription' => $jobDescription,
            ]);
    }
}
