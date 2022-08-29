<?php

namespace App\Http\Controllers\Job;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlJobApplication;
use Illuminate\Support\Facades\Validator;
use File;
use Illuminate\Support\Facades\Mail;
use App\Mail\CandidateCv;

class JobController extends Controller
{
    public function saveApplication(Request $request){
    $save_application = new ZtlJobApplication();
               if($request->hasFile('cv')){
            $file=$request->file('cv');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('job/cv',$filename);
            $save_application->cv =$filename ;
         } 

           $save_application->name = $request->name;
            $save_application->email = $request->email;
            $save_application->phone = $request->phone;
            $save_application->emergency_no = $request->emergency_no;
            $save_application->highest_qualificiation = $request->highest_qualificiation;
            $save_application->current_employeer = $request->current_employeer;
            $save_application->experience_from_year = $request->experience_from_year;
            $save_application->experience_from_month = $request->experience_from_month;
            $save_application->notice_period = $request->notice_period;
            $save_application->save();

        // Mail::to('hr@zaimahtech.com')->send(new CandidateCv());
        Mail::to('rakib10ms@gmail.com')->send(new CandidateCv());

    //        $details = [
    //     'title' => 'Mail from ItSolutionStuff.com',
    //     'body' => 'This is for testing email using smtp'
    // ];
   
    // \Mail::to('rakib10ms@gmail.com')->send(new \App\Mail\CandidateCv($details));


 return response()->json([
                'status' => 200,
                'message' => 'Your data saved Successfully',
            ]); 
    }


    // all_cv
   public function allCandidatesCv(){
          $all_cv=ZtlJobApplication::orderBy('id','desc')->get();
           return response()->json([
                'status' => 200,
                'all_cv' => $all_cv,
            ]); 
    }

    //deleteCandidateCv

    public function deleteCandidateCv($id){
   $del_cv = ZtlJobApplication::find($id);
        $file=$del_cv->cv;
        $filename = public_path().'/job/cv/'.$file;
        File::delete($filename);

        $del_cv->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Candidate CV deleted successfully',
            ]);
    }
}
