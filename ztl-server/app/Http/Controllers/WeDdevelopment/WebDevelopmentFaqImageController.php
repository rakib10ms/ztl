<?php

namespace App\Http\Controllers\WeDdevelopment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlWebDevelopmentFaqImage;
use Illuminate\Support\Facades\Validator;
use File;
class WebDevelopmentFaqImageController extends Controller
{
       public function index()
    {
                $faq_image = ZtlWebDevelopmentFaqImage::orderBy('id','desc')->get();

        $count = ZtlWebDevelopmentFaqImage::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
                      'count'=>$count,

            'faq_image' => $faq_image
         ]);
    }

    
    public function store(Request $request)
    {

            $faq_image = new ZtlWebDevelopmentFaqImage();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $faq_image->image =$filename ;
         } 

          
            $faq_image->save();
                    $count = ZtlWebDevelopmentFaqImage::orderBy('id','desc')->get()->count();



 return response()->json([
                'status' => 200,
                'count'=>$count,

                'message' => 'Web Dev Faq Image Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $faq_image = ZtlWebDevelopmentFaqImage::find($id);

        if ($faq_image)
        {
            return response()->json([
                'status' => 200,
                'faq_image' => $faq_image,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No faq_image Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $faq_image = ZtlWebDevelopmentFaqImage::find($id);

            if($request->file != ''){        
          $path = public_path().'/images/our_partners/';

          //code for remove old file
          if($faq_image->faq_image != null){
               $file_old = $path.$faq_image->faq_image;
        File::delete($file_old);
          }
      }

          //upload new file
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $faq_image->image =$filename ;
            }

            $faq_image->update();



    
        return response()->json([
                'status' => 200,
                'message' => 'Web Dev Faq Image Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $faq_image = ZtlWebDevelopmentFaqImage::find($id);
        $file=$faq_image->faq_image;
        $filename = public_path().'/images/our_partners/'.$file;
        File::delete($filename);

        $faq_image->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Web Dev Faq Image  deleted successfully',
            ]);

    
    }
}
