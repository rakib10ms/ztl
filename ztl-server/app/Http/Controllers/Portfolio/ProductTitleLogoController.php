<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlProductTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class ProductTitleLogoController extends Controller
{
    public function index()
    {
        $product= ZtlProductTitleLogo::orderBy('id','desc')->get();
         $count= ZtlProductTitleLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'product' => $product
         ]);
    }

    
    public function store(Request $request)
    {

            $product= new ZtlProductTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/webdevcare/',$filename);
            $product->image =$filename ;
         } 

           $product->title_name = $request->title_name;
            $product->save();
         $count= ZtlProductTitleLogo::orderBy('id','desc')->get()->count();


 return response()->json([
                'status' => 200,
                           'count'=>$count,

                'message' => 'Product Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $product= ZtlProductTitleLogo::find($id);

        if ($product)
        {
            return response()->json([
                'status' => 200,
                'product' => $product,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No productFound',
            ]);
        }

    }

public function update(Request $request,$id){

             $product=ZtlProductTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/webdevcare/', $name);
        }
           
            $product->title_name = $request->title_name;
            if($files!=null){
             $product->image=$name;

            }
            $product->update();

 return response()->json([
                'status' => 200,
                'message' => 'Product & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $product= ZtlProductTitleLogo::find($id);
        $file=$product->image;
        $filename = public_path().'/images/webdevcare/'.$file;
        File::delete($filename);

        $webdev->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Product Title & Banner deleted successfully',
            ]);

    
    }
}
