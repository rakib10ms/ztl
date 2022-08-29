<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlServiceType;
use Illuminate\Support\Facades\Validator;
use File;
class ServiceTypeController extends Controller
{
      public function index()
    {
        $service_type = ZtlServiceType::orderBy('id','desc')->get();
        $count= ZtlServiceType::orderBy('id','desc')->get()->count();

        return response()->json([
           'status' => 200,
         'count'=>$count,

            'service_type' => $service_type
         ]);
    }

    
    public function store(Request $request)
    {
           $count= ZtlServiceType::orderBy('id','desc')->get()->count();

            $service_type = new ZtlServiceType();
               if($request->hasFile('service_logo')){
            $file=$request->file('service_logo');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/service_type/',$filename);
            $service_type->service_logo =$filename ;
         } 

           $service_type->service_name = $request->service_name;
            $service_type->short_description = $request->short_description;
            $service_type->save();


 return response()->json([
                'status' => 200,
                'count'=>$count,
                'message' => 'Service Type Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $service_type = ZtlServiceType::find($id);

        if ($service_type)
        {
            return response()->json([
                'status' => 200,
                'service_type' => $service_type,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No service_type Found',
            ]);
        }

    }

public function update(Request $request,$id){

             $update_service_type=ZtlServiceType::find($id);

          

 if ($files = $request->file('service_logo')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/service_type/', $name);
        }
           
            $update_service_type->service_name = $request->service_name;
            $update_service_type->short_description = $request->short_description;
            if($files!=null){
             $update_service_type->service_logo=$name;

            }
            $update_service_type->update();

 return response()->json([
                'status' => 200,
                'message' => 'Service Type Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $service_type = ZtlServiceType::find($id);
        $file=$service_type->service_logo;
        $filename = public_path().'/images/service_type/'.$file;
        File::delete($filename);

        $service_type->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Service Type deleted successfully',
            ]);

    
    }

}


