<?php

namespace App\Http\Controllers\Partner;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlBecomeAPartnerTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class BecomeAPartnerTitleLogoController extends Controller
{
    public function index()
    {
        $partner= ZtlBecomeAPartnerTitleLogo::orderBy('id','desc')->get();
         $count= ZtlBecomeAPartnerTitleLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'partner' => $partner
         ]);
    }

    
    public function store(Request $request)
    {

            $partner= new ZtlBecomeAPartnerTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/webdevcare/',$filename);
            $partner->image =$filename ;
         } 

           $partner->title_name = $request->title_name;
            $partner->save();
         $count= ZtlBecomeAPartnerTitleLogo::orderBy('id','desc')->get()->count();


 return response()->json([
                'status' => 200,
                           'count'=>$count,

                'message' => 'Become a partner Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $partner= ZtlBecomeAPartnerTitleLogo::find($id);

        if ($partner)
        {
            return response()->json([
                'status' => 200,
                'partner' => $partner,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No partnerFound',
            ]);
        }

    }

public function update(Request $request,$id){

             $partner=ZtlBecomeAPartnerTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/webdevcare/', $name);
        }
           
            $partner->title_name = $request->title_name;
            if($files!=null){
             $partner->image=$name;

            }
            $partner->update();

 return response()->json([
                'status' => 200,
                'message' => 'Become a partner & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $partner= ZtlBecomeAPartnerTitleLogo::find($id);
        $file=$partner->image;
        $filename = public_path().'/images/webdevcare/'.$file;
        File::delete($filename);

        $webdev->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Become a partner Title & Banner deleted successfully',
            ]);

    
    }
}
