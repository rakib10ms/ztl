<?php

namespace App\Http\Controllers\Erp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlCustomErpSolution;
use Illuminate\Support\Facades\Validator;
use File;
class CustomErpSolutionController extends Controller
{
      public function index()
    {
        $erp = ZtlCustomErpSolution::orderBy('id','desc')->get();
        $count= ZtlCustomErpSolution::orderBy('id','desc')->get()->count();

        return response()->json([
           'status' => 200,
         'count'=>$count,

            'erp' => $erp
         ]);
    }

    
    public function store(Request $request)
    {
           $count= ZtlCustomErpSolution::orderBy('id','desc')->get()->count();

            $erp = new ZtlCustomErpSolution();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/service_type/',$filename);
            $erp->image =$filename ;
         } 

           $erp->title = $request->title;
            $erp->short_description = $request->short_description;
            $erp->save();


 return response()->json([
                'status' => 200,
                'count'=>$count,
                'message' => 'Custom Erp Solution  Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $erp = ZtlCustomErpSolution::find($id);

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

public function update(Request $request,$id){

             $update_erp=ZtlCustomErpSolution::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/service_type/', $name);
        }
           
            $update_erp->title = $request->title;
            $update_erp->short_description = $request->short_description;
            if($files!=null){
             $update_erp->image=$name;

            }
            $update_erp->update();

 return response()->json([
                'status' => 200,
                'message' => 'Custom Erp Solution  Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $erp = ZtlCustomErpSolution::find($id);
        $file=$erp->image;
        $filename = public_path().'/images/service_type/'.$file;
        File::delete($filename);

        $erp->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Custom Erp Solution  deleted successfully',
            ]);

    
    }

}
