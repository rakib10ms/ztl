<?php

namespace App\Http\Controllers\HealthCare;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlHealthCareSolutionCard;
use Illuminate\Support\Facades\Validator;
use File;
class HealthCareSolutionCardController extends Controller
{
    
      public function index()
    {
        $health = ZtlHealthCareSolutionCard::orderBy('id','desc')->get();
        $count= ZtlHealthCareSolutionCard::orderBy('id','desc')->get()->count();

        return response()->json([
           'status' => 200,
         'count'=>$count,

            'health' => $health
         ]);
    }

    
    public function store(Request $request)
    {
           $count= ZtlHealthCareSolutionCard::orderBy('id','desc')->get()->count();

            $health = new ZtlHealthCareSolutionCard();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/service_type/',$filename);
            $health->image =$filename ;
         } 

           $health->title = $request->title;
            $health->short_description = $request->short_description;
            $health->save();


 return response()->json([
                'status' => 200,
                'count'=>$count,
                'message' => 'HealthCare Solution  Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $health = ZtlHealthCareSolutionCard::find($id);

        if ($health)
        {
            return response()->json([
                'status' => 200,
                'health' => $health,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No health Found',
            ]);
        }

    }

public function update(Request $request,$id){

             $update_health=ZtlHealthCareSolutionCard::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/service_type/', $name);
        }
           
            $update_health->title = $request->title;
            $update_health->short_description = $request->short_description;
            if($files!=null){
             $update_health->image=$name;

            }
            $update_health->update();

 return response()->json([
                'status' => 200,
                'message' => 'HealthCare Solution  Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $health = ZtlHealthCareSolutionCard::find($id);
        $file=$health->image;
        $filename = public_path().'/images/service_type/'.$file;
        File::delete($filename);

        $health->delete();
            return response()->json([
                'status' => 200,
                'message' => 'HealthCare Solution  deleted successfully',
            ]);

    
    }

}
