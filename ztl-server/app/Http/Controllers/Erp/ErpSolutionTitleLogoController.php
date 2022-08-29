<?php

namespace App\Http\Controllers\Erp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlErpSolutionTitleLogo;
use Illuminate\Support\Facades\Validator;
use File;
class ErpSolutionTitleLogoController extends Controller
{
     public function index()
    {
                $count = ZtlErpSolutionTitleLogo::orderBy('id','desc')->get()->count();

        $erp = ZtlErpSolutionTitleLogo::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
             'count'=>$count,

            'erp' => $erp
         ]);
    }

    
    public function store(Request $request)
    {

            $erp = new ZtlErpSolutionTitleLogo();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/erp/',$filename);
            $erp->image =$filename ;
         } 

           $erp->title_name = $request->title_name;
            $erp->save();

                $count = ZtlErpSolutionTitleLogo::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                'message' => 'Erp Solution Title & Banner Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $erp = ZtlErpSolutionTitleLogo::find($id);

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

             $update_erp=ZtlErpSolutionTitleLogo::find($id);

          

 if ($files = $request->file('image')) {
            $names = $files->getClientOriginalName();
            $name = rand(111, 99999).$names;
            $files->move('images/erp/', $name);
        }
           
            $update_erp->title_name = $request->title_name;
            if($files!=null){
             $update_erp->image=$name;

            }
            $update_erp->update();

 return response()->json([
                'status' => 200,
                'message' => 'Erp Solution Title & Banner Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $erp = ZtlErpSolutionTitleLogo::find($id);
        $file=$erp->image;
        $filename = public_path().'/images/erp/'.$file;
        File::delete($filename);

        $erp->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Erp Solution Title & Banner deleted successfully',
            ]);

    
    }
}
