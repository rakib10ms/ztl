<?php

namespace App\Http\Controllers\JobList;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlJobList;
use Illuminate\Support\Facades\Validator;
use File;
class JobListController extends Controller
{
         public function index()
    {
        $jobList = ZtlJobList::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
            'jobList' => $jobList
         ]);
    }

    
 //    public function store(Request $request)
 //    {

 //            $jobList = new ZtlJobList();
 //               if($request->hasFile('job_post_logo')){
 //            $file=$request->file('job_post_logo');
 //            $extension=$file->getClientOriginalExtension();
 //            $filename=time().'.'.$extension;
 //            $file->move('images/job_list/',$filename);
 //            $jobList->job_post_logo =$filename ;
 //         } 

 //           $jobList->job_tittle = $request->job_tittle;
 //           $jobList->job_id = $request->job_id;
 //            $jobList->job_experience = $request->job_experience;
 //            $jobList->job_status = $request->job_status;
 //            $jobList->save();


 // return response()->json([
 //                'status' => 200,
 //                'message' => 'JobList Added Successfully',
 //            ]);   
 //     }


         public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'job_id' => 'required|unique:ztl_job_lists',
            'job_tittle' => 'required',
            'job_experience' => 'required',
            'job_status'=>'required'

        ]);
           

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{
             $jobList = new ZtlJobList();
               if($request->hasFile('job_post_logo')){
            $file=$request->file('job_post_logo');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/job_list/',$filename);
            $jobList->job_post_logo =$filename ;
         } 

           $jobList->job_tittle = $request->job_tittle;
           $jobList->job_id = $request->job_id;
            $jobList->job_experience = $request->job_experience;
            $jobList->job_status = $request->job_status;
            $jobList->save();


 return response()->json([
                'status' => 200,
                'message' => 'JobList Added Successfully',
            ]);   
        }
    }










   public function edit($id)
    {
        $jobList = ZtlJobList::find($id);

        if ($jobList)
        {
            return response()->json([
                'status' => 200,
                'jobList' => $jobList,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No jobList Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $jobList = ZtlJobList::find($id);
    if ($request->hasFile('job_post_logo')) {
        if($jobList->job_post_logo != null){
            $file_path = 'images/job_list/'.$jobList->job_post_logo;
            if(file_exists($file_path)){
                // unlink($file_path);
                File::delete($file_path);

            }
        }
        $file = $request->file('job_post_logo');
        $original_name = $file->getClientOriginalName();
        $file_name = time().rand(1,0).$original_name;
        $file->move(public_path('images/job_list/'),$file_name);
        $jobList->job_post_logo = $file_name;


     }
 
            $jobList->job_tittle = $request->job_tittle;
                       $jobList->job_id = $request->job_id;

            $jobList->job_experience = $request->job_experience;
            $jobList->job_status = $request->job_status;
            $jobList->update();


 return response()->json([
                'status' => 200,
                'message' => 'JobList Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $jobList = ZtlJobList::find($id);
        $file=$jobList->job_post_logo;
        $filename = public_path().'/images/job_list/'.$file;
        File::delete($filename);

        $jobList->delete();
            return response()->json([
                'status' => 200,
                'message' => 'JobList deleted successfully',
            ]);

    
    }


}
