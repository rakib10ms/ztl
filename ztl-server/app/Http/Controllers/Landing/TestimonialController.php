<?php

namespace App\Http\Controllers\Landing;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlLandingTestimonial;
use Illuminate\Support\Facades\Validator;
use File;
class TestimonialController extends Controller
{
     public function index()
    {
        $testimonial = ZtlLandingTestimonial::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
            'testimonial' => $testimonial
         ]);
    }

    
    public function store(Request $request)
    {

            $testimonial = new ZtlLandingTestimonial();
               if($request->hasFile('client_image')){
            $file=$request->file('client_image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('landing/testimonial/',$filename);
            $testimonial->client_image =$filename ;
         } 

           $testimonial->heading_name = $request->heading_name;
            $testimonial->heading_description = $request->heading_description;
            $testimonial->client_name = $request->client_name;
            $testimonial->client_company_name = $request->client_company_name;
            $testimonial->client_designation = $request->client_designation;
            // $testimonial->image = $name;
            $testimonial->save();


 return response()->json([
                'status' => 200,
                'message' => 'Testimonial Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $testimonial = ZtlLandingTestimonial::find($id);

        if ($testimonial)
        {
            return response()->json([
                'status' => 200,
                'testimonial' => $testimonial,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No testimonial Found',
            ]);
        }

    }




public function update(Request $request, $id){

  if ($files = $request->file('client_image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('landing/testimonial/', $name);
        }
            $update_testimonial=ZtlLandingTestimonial::find($id);
            $update_testimonial->heading_name=$request->heading_name;
            $update_testimonial->heading_description=$request->heading_description;
            $update_testimonial->client_name=$request->client_name;
            $update_testimonial->client_company_name=$request->client_company_name;
                                    $update_testimonial->client_designation = $request->client_designation;

            if($files!=null){
             $update_testimonial->client_image=$name;

            }
            $update_testimonial->update();

 return response()->json([
                'status' => 200,
                'message' => 'Testimonial Updated Successfully',
            ]);        
          }



    public function destroy($id)
    {
        $testimonial = ZtlLandingTestimonial::find($id);
        $file=$testimonial->client_image;
        $filename = public_path().'/landing/testimonial/'.$file;
        File::delete($filename);

        $testimonial->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Testimonial deleted successfully',
            ]);

    
    }

  
}
