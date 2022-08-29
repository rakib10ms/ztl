<?php

namespace App\Http\Controllers\Faq;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlFaqImage;
use Illuminate\Support\Facades\Validator;
use File;
class FaqImageController extends Controller
{
       public function index()
    {
        $faq_image = ZtlFaqImage::orderBy('id','desc')->get();

        $count= ZtlFaqImage::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'faq_image' => $faq_image
         ]);
    }

    
    public function store(Request $request)
    {
        $count= ZtlFaqImage::orderBy('id','desc')->get()->count();

            $faq_image = new ZtlFaqImage();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $faq_image->image =$filename ;
         } 

          
            $faq_image->save();


 return response()->json([
                'status' => 200,
                 'count'=>$count,

                'message' => 'faq_image Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $faq_image = ZtlFaqImage::find($id);

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
        $faq_image = ZtlFaqImage::find($id);

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
                'message' => 'faq_image Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $faq_image = ZtlFaqImage::find($id);
        $file=$faq_image->faq_image;
        $filename = public_path().'/images/our_partners/'.$file;
        File::delete($filename);

        $faq_image->delete();
            return response()->json([
                'status' => 200,
                'message' => 'faq_image deleted successfully',
            ]);

    
    }
}
