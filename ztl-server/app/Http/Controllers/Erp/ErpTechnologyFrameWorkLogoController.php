<?php

namespace App\Http\Controllers\Erp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlErpTechnologyFrameWorkLogo;
use Illuminate\Support\Facades\Validator;
use File;
class ErpTechnologyFrameWorkLogoController extends Controller
{
          public function index()
    {
                $erp = ZtlErpTechnologyFrameWorkLogo::orderBy('id','desc')->get();

        $count = ZtlErpTechnologyFrameWorkLogo::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
                      'count'=>$count,

            'erp' => $erp
         ]);
    }

    
    public function store(Request $request)
    {
        $count = ZtlErpTechnologyFrameWorkLogo::orderBy('id','desc')->get()->count();

            $erp = new ZtlErpTechnologyFrameWorkLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $erp->image =$filename ;
         } 

          
            $erp->save();


 return response()->json([
                'status' => 200,
                'count'=>$count,

                'message' => 'Erp Technology Image Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $erp = ZtlErpTechnologyFrameWorkLogo::find($id);

        if ($erp)
        {
            return response()->json([
                'status' => 200,
                'erp' => $erp,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No erp Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $erp = ZtlErpTechnologyFrameWorkLogo::find($id);

            if($request->file != ''){        
          $path = public_path().'/images/our_partners/';

          //code for remove old file
          if($erp->erp != null){
               $file_old = $path.$erp->erp;
        File::delete($file_old);
          }
      }

          //upload new file
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/our_partners/',$filename);
            $erp->image =$filename ;
            }

            $erp->update();



    
        return response()->json([
                'status' => 200,
                'message' => 'Erp Technology Image Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $erp = ZtlErpTechnologyFrameWorkLogo::find($id);
        $file=$erp->erp;
        $filename = public_path().'/images/our_partners/'.$file;
        File::delete($filename);

        $erp->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Erp Technology Image  deleted successfully',
            ]);

    
    }
}
