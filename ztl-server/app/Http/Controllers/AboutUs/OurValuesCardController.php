<?php

namespace App\Http\Controllers\AboutUs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlOurValuesCard;
use Illuminate\Support\Facades\Validator;
use File;
class OurValuesCardController extends Controller
{
    
      public function index()
    {
        $value = ZtlOurValuesCard::orderBy('id','desc')->get();
        $count= ZtlOurValuesCard::orderBy('id','desc')->get()->count();

        return response()->json([
           'status' => 200,
         'count'=>$count,

            'value' => $value
         ]);
    }

    
    public function store(Request $request)
    {
           $count= ZtlOurValuesCard::orderBy('id','desc')->get()->count();

            $value = new ZtlOurValuesCard();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/service_type/',$filename);
            $value->image =$filename ;
         } 

           $value->title = $request->title;
            $value->short_description = $request->short_description;
            $value->save();


 return response()->json([
                'status' => 200,
                'count'=>$count,
                'message' => 'Our Values Card  Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $value = ZtlOurValuesCard::find($id);

        if ($value)
        {
            return response()->json([
                'status' => 200,
                'value' => $value,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No value Found',
            ]);
        }

    }

public function update(Request $request,$id){

             $update_value=ZtlOurValuesCard::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/service_type/', $name);
        }
           
            $update_value->title = $request->title;
            $update_value->short_description = $request->short_description;
            if($files!=null){
             $update_value->image=$name;

            }
            $update_value->update();

 return response()->json([
                'status' => 200,
                'message' => 'Our Values Card  Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $value = ZtlOurValuesCard::find($id);
        $file=$value->image;
        $filename = public_path().'/images/service_type/'.$file;
        File::delete($filename);

        $value->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Our Values Card  deleted successfully',
            ]);

    
    }

}
