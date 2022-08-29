<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlPartner;
use App\Models\ZtlConsultation;
use App\Models\ZtlContactUs;
use Illuminate\Support\Facades\Validator;
use File;
use Illuminate\Support\Facades\Mail;
use App\Mail\CandidateCv;
use App\Mail\consultation;

class PartnerController extends Controller
{
    
        public function saveBecomePartner(Request $request)
    {

            $partner = new ZtlPartner();
           $partner->first_name = $request->first_name;
            $partner->last_name = $request->last_name;
            $partner->email = $request->email;
            $partner->phone = $request->phone;
            $partner->customer_type = $request->customer_type;
            $partner->description = $request->description;
            $partner->partner_type = $request->partner_type;
            $partner->country = $request->country;
            $partner->job_title = $request->job_title;
            $partner->notification = $request->notification;
            $partner->save();

        // Mail::to('info@zaimahtech.com')->send(new CandidateCv());

 return response()->json([
                'status' => 200,
                'message' => 'Partner Added Successfully',
            ]);   
     }

     //save consultation 
     public function saveConsultation(Request $request){
         $consultation = new ZtlConsultation();
           $consultation->name = $request->name;
            $consultation->email = $request->email;
            $consultation->phone = $request->phone;
            $consultation->message = $request->message;
            $consultation->save();

        Mail::to('rakib10ms@gmail.com')->send(new consultation($consultation));

    //       $details = [
    //     'title' => 'Mail from ItSolutionStuff.com',
    //     'body' => 'This is for testing email using smtp'
    // ];
   
    // \Mail::to('your_receiver_email@gmail.com')->send(new \App\Mail\MyTestMail($details));
   
    // dd("Email is Sent.");

 return response()->json([
                'status' => 200,
                'message' => 'Your Consultancy Added Successfully',
            ]);   

     }

     //delete consultant

       public function deleteAllConsultant($id){
  
        $del_consultant = ZtlConsultation::find($id);
        $del_consultant->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Consultant deleted successfully',
            ]);

    
    

    }

   // all_consultant
   public function allConsultant(){
          $all_consultant=ZtlConsultation::orderBy('id','desc')->get();
                  // Mail::to('info@zaimahtech.com')->send(new CandidateCv());

           return response()->json([
                'status' => 200,
                'all_consultant' => $all_consultant,
            ]); 
    }

    //all partner list

    public function allPartner(){
 $all_partner=ZtlPartner::orderBy('id','desc')->get();
           return response()->json([
                'status' => 200,
                'all_partner' => $all_partner,
            ]); 
    }

    //delete all partner

    public function deleteAllPartner($id){
  
        $del_partner = ZtlPartner::find($id);
        $del_partner->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Partner deleted successfully',
            ]);

    
    

    }


    //save contact us 

     public function saveContactUs(Request $request){
       $contact_us = new ZtlContactUs();
           $contact_us->name = $request->name;
            $contact_us->email = $request->email;
            $contact_us->phone = $request->phone;
            $contact_us->message = $request->message;
            $contact_us->save();


 return response()->json([
                'status' => 200,
                'message' => 'Your form submitted successfully',
            ]);   

    }
    //all contact us 


    public function allContactUs(){
 $all_contacts=ZtlContactUs::orderBy('id','desc')->get();
           return response()->json([
                'status' => 200,
                'all_contacts' => $all_contacts,
            ]); 
    }

}
