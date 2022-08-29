<?php

namespace App\Http\Controllers\HealthCare;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlHealthTechnologyFrameWorkLogo;
use Illuminate\Support\Facades\Validator;
use File;
class HealthTechnologyFrameWorkLogoController extends Controller
{
      public function index()
    {
                $health = ZtlHealthTechnologyFrameWorkLogo::orderBy('id','desc')->get();

        $count = ZtlHealthTechnologyFrameWorkLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
                      'count'=>$count,

            'health' => $health
         ]);
    }

    
    public function store(Request $request)
    {
        $count = ZtlHealthTechnologyFrameWorkLogo::orderBy('id','desc')->get()->count();

            $health = new ZtlHealthTechnologyFrameWorkLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $health->image =$filename ;
         } 

          
            $health->save();


 return response()->json([
                'status' => 200,
                'count'=>$count,

                'message' => 'Health Technology Image Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $health = ZtlHealthTechnologyFrameWorkLogo::find($id);

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

    public function update(Request $request, $id)
    {
        $health = ZtlHealthTechnologyFrameWorkLogo::find($id);

            if($request->file != ''){        
          $path = public_path().'/images/our_partners/';

          //code for remove old file
          if($health->health != null){
               $file_old = $path.$health->health;
        File::delete($file_old);
          }
      }

          //upload new file
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $health->image =$filename ;
            }

            $health->update();



    
        return response()->json([
                'status' => 200,
                'message' => 'Health Technology Image Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $health = ZtlHealthTechnologyFrameWorkLogo::find($id);
        $file=$health->health;
        $filename = public_path().'/images/our_partners/'.$file;
        File::delete($filename);

        $health->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Health Technology Image  deleted successfully',
            ]);

    
    }
}
