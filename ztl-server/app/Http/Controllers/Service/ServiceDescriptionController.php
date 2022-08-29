<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlServiceDescription;

class ServiceDescriptionController extends Controller
{
     public function index()
    {
        $service_description = ZtlServiceDescription::orderBy('id','desc')->get();
     $counts = ZtlServiceDescription::orderBy('id','desc')->get();
        $count=$counts->count();
        return response()->json([
           'status' => 200,
            'service_description' => $service_description,
            'count'=>$count,

         ]);
    }

    
    public function store(Request $request)
    {

            $service_description = new ZtlServiceDescription();

            $service_description->short_description = $request->short_description;
            $service_description->save();

        $counts = ZtlServiceDescription::orderBy('id','desc')->get();
        $count=$counts->count();

 return response()->json([
                'status' => 200,
                'count'=>$count,
                'message' => 'Service Description Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $service_description = ZtlServiceDescription::find($id);

        if ($service_description)
        {
            return response()->json([
                'status' => 200,
                'service_description' => $service_description,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No service_description Found',
            ]);
        }

    }

public function update(Request $request,$id){

             $update_service_description=ZtlServiceDescription::find($id);


          $update_service_description->short_description = $request->short_description;
         
            $update_service_description->update();

 return response()->json([
                'status' => 200,
                'message' => 'Service Description Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $service_description = ZtlServiceDescription::find($id);

        $service_description->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Service Description deleted successfully',
            ]);

    
    }
}
