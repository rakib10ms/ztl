<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlOurPartner;
use Illuminate\Support\Facades\Validator;
use File;
class OurPartnersController extends Controller
{
public function index()
    {
        $our_partner = ZtlOurPartner::orderBy('id','desc')->get();


        return response()->json(
            ['status'=>200,'our_partner'=>$our_partner]);
    }



    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'image'=>'required',
        ],
            // ['status_id.required' => 'Status field is required!'] 
         );

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{
            if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/our_partners/', $name);
        }
            $our_partner = new ZtlOurPartner();
            if($files!=null){
            $our_partner->image=$name;
            }
            $our_partner->save();

            return response()->json(['status'=>200,'message'=>'Our Partner Logo  Added Successfully']);
        }
    }


    public function edit($id)
    {
        $our_partner=ZtlOurPartner::find($id);
        return response()->json(['status'=>200,'our_partner'=>$our_partner]);
    }


    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(),[
            // 'PULimbDermatomes_name' => 'required|max:100',
        ]
        );

        if ($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);

        }else{
            if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/our_partners/', $name);
        }
            $update_partners=ZtlOurPartner::find($id);
            if($files!=null){
             $update_partners->image=$name;

            }
            $update_partners->update();

            return response()->json(['status'=>200,'message'=>'Our Partner Logo Updated Successfully']);
        }
    }

   public function destroy($id)
    {
        $our_partners = ZtlOurPartner::find($id);
        $file=$our_partners->image;
        $filename = public_path().'/images/our_partners/'.$file;
        File::delete($filename);

        $our_partners->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Our Partners Logo deleted successfully',
            ]);

    
    }






























//          public function index()
//     {
//         $our_partners = ZtlOurPartner::orderBy('id','desc')->get();
//         return response()->json([
//            'status' => 200,
//             'our_partners' => $our_partners
//          ]);
//     }

    
//     public function store(Request $request)
//     {

//             $our_partners = new ZtlOurPartner();
//                if($request->hasFile('our_partner_logo')){
//             $file=$request->file('our_partner_logo');
//             $extension=$file->getClientOriginalExtension();
//             $filename=time().'.'.$extension;
//             $file->move('images/our_partners/',$filename);
//             $our_partners->our_partner_logo =$filename ;
//          } 

//             $our_partners->save();


//  return response()->json([
//                 'status' => 200,
//                 'message' => 'Our Partner Logo Added Successfully',
//             ]);   
//      }


//    public function edit($id)
//     {
//         $our_partners = ZtlOurPartner::find($id);

//         if ($our_partners)
//         {
//             return response()->json([
//                 'status' => 200,
//                 'our_partners' => $our_partners,
//             ]);

//         }else{
//             return response()->json([
//                 'status' => 404,
//                 'message' => 'No our_partners Found',
//             ]);
//         }

//     }

// public function update(Request $request,$id){

//  $our_partners = ZtlOurPartner::find($id);
//     if ($request->hasFile('our_partner_logo')) {
//         if($our_partners->our_partner_logo != null){
//             $file_path = 'images/our_partners/'.$our_partners->our_partner_logo;
//             if(file_exists($file_path)){
//                 // unlink($file_path);
//                 File::delete($file_path);

//             }
//         }
//         $file = $request->file('our_partner_logo');
//         $original_name = $file->getClientOriginalName();
//         $file_name = time().rand(1,0).$original_name;
//         $file->move(public_path('images/job_list/'),$file_name);
//         $our_partners->our_partner_logo = $file_name;


//      }
 
//             $our_partners->job_tittle = $request->job_tittle;
//             $our_partners->job_experience = $request->job_experience;
//             $our_partners->job_status = $request->job_status;
//             $our_partners->update();


//  return response()->json([
//                 'status' => 200,
//                 'message' => 'Our Partners Logo Updated Successfully',
//             ]);   
//     }

//    public function destroy($id)
//     {
//         $our_partners = ZtlOurPartner::find($id);
//         $file=$our_partners->our_partner_logo;
//         $filename = public_path().'/images/our_partners/'.$file;
//         File::delete($filename);

//         $our_partners->delete();
//             return response()->json([
//                 'status' => 200,
//                 'message' => 'Our Partners Logo deleted successfully',
//             ]);

    
//     }

}
