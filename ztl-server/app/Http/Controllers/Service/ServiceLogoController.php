<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlServiceLogo;
use Illuminate\Support\Facades\Validator;
use File;
class ServiceLogoController extends Controller
{
     public function index()
    {
        $service_logo = ZtlServiceLogo::orderBy('id','desc')->get();
        $count= ZtlServiceLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'service_logo' => $service_logo
         ]);
    }

    
    public function store(Request $request)
    {

        $count= ZtlServiceLogo::orderBy('id','desc')->get()->count();

            $service_logo = new ZtlServiceLogo();
               if($request->hasFile('service_logo')){
            $file=$request->file('service_logo');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/service_logo/',$filename);
            $service_logo->service_logo =$filename ;
         } 

          
            $service_logo->save();


 return response()->json([
                'status' => 200,
                'count'=>$count,
                'message' => 'Service logo Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $service_logo = ZtlServiceLogo::find($id);

        if ($service_logo)
        {
            return response()->json([
                'status' => 200,
                'service_logo' => $service_logo,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No service_logo Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $service_logo = ZtlServiceLogo::find($id);

            if($request->file != ''){        
          $path = public_path().'/images/service_logo/';

          //code for remove old file
          if($service_logo->service_logo != null){
               $file_old = $path.$service_logo->service_logo;
        File::delete($file_old);
          }
      }

          //upload new file
               if($request->hasFile('service_logo')){
            $file=$request->file('service_logo');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/service_logo/',$filename);
            $service_logo->service_logo =$filename ;
            }

            $service_logo->update();



    
        return response()->json([
                'status' => 200,
                'message' => 'Service logo Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $service_logo = ZtlServiceLogo::find($id);
        $file=$service_logo->service_logo;
        $filename = public_path().'/images/service_logo/'.$file;
        File::delete($filename);

        $service_logo->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Service logo deleted successfully',
            ]);

    
    }
}
