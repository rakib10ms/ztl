<?php

namespace App\Http\Controllers\HealthCare;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlHealthCareTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class HealthCareTitleLogoController extends Controller
{
     public function index()
    {
                $count = ZtlHealthCareTitleLogo::orderBy('id','desc')->get()->count();

        $health = ZtlHealthCareTitleLogo::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
             'count'=>$count,

            'health' => $health
         ]);
    }

    
    public function store(Request $request)
    {

            $health = new ZtlHealthCareTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/healthcare/',$filename);
            $health->image =$filename ;
         } 

           $health->title_name = $request->title_name;
            $health->save();

                $count = ZtlHealthCareTitleLogo::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                'message' => 'Health Care Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $health = ZtlHealthCareTitleLogo::find($id);

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

             $update_health=ZtlHealthCareTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/healthcare/', $name);
        }
           
            $update_health->title_name = $request->title_name;
            if($files!=null){
             $update_health->image=$name;

            }
            $update_health->update();

 return response()->json([
                'status' => 200,
                'message' => 'Health Care Title & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $health = ZtlHealthCareTitleLogo::find($id);
        $file=$health->image;
        $filename = public_path().'/images/healthcare/'.$file;
        File::delete($filename);

        $health->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Health Care Title & Banner deleted successfully',
            ]);

    
    }
}
