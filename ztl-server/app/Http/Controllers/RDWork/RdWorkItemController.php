<?php

namespace App\Http\Controllers\RDWork;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\RDWorkItem;
use Illuminate\Support\Facades\Validator;
use File;
class RdWorkItemController extends Controller
{
         public function index()
    {
        $rd = RDWorkItem::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
            'rd' => $rd
         ]);
    }

    
    public function store(Request $request)
    {


            $rd = new RDWorkItem();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/job_list/',$filename);
            $rd->image =$filename ;
         } 

           $rd->rd_title = $request->rd_title;
           $rd->rd_description = $request->rd_description;
            $rd->project_name = $request->project_name;
           
            $rd->save();


 return response()->json([
                'status' => 200,
                'message' => 'rd Added Successfully',
            ]);   
     }






   public function edit($id)
    {
        $rd = RDWorkItem::find($id);

        if ($rd)
        {
            return response()->json([
                'status' => 200,
                'rd' => $rd,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No rd Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $rd = RDWorkItem::find($id);
    if ($request->hasFile('image')) {
        if($rd->image != null){
            $file_path = 'images/job_list/'.$rd->image;
            if(file_exists($file_path)){
                // unlink($file_path);
                File::delete($file_path);

            }
        }
        $file = $request->file('image');
        $original_name = $file->getClientOriginalName();
        $file_name = time().rand(1,0).$original_name;
        $file->move(public_path('images/job_list/'),$file_name);
        $rd->image = $file_name;


     }
           $rd->rd_title = $request->rd_title;
           $rd->rd_description = $request->rd_description;
            $rd->project_name = $request->project_name;
           
            $rd->update();


 return response()->json([
                'status' => 200,
                'message' => 'rd Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $rd = RDWorkItem::find($id);
        $file=$rd->image;
        $filename = public_path().'/images/job_list/'.$file;
        File::delete($filename);

        $rd->delete();
            return response()->json([
                'status' => 200,
                'message' => 'rd deleted successfully',
            ]);

    
    }

    public function getRDItem($id){

        $rd_item=RDWorkItem::where('id',$id)->first();
           return response()->json([
                'status' => 200,
                'rd_item' => $rd_item,
            ]);

    }

 
}
