<?php

namespace App\Http\Controllers\Projects;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlOurWorldWideProject;
use Illuminate\Support\Facades\Validator;
use File;
class OurWorldWideProjectController extends Controller
{
    
        public function index()
    {
        $projects = ZtlOurWorldWideProject::orderBy('id','desc')->get();
        $e_commerce = ZtlOurWorldWideProject::where('category','E-Commerce')->orderBy('id','desc')->get();
        $IoT = ZtlOurWorldWideProject::where('category','IoT')->orderBy('id','desc')->get();
        $legal = ZtlOurWorldWideProject::where('category','Legal & Law')->orderBy('id','desc')->get();
        $health_care = ZtlOurWorldWideProject::where('category','Healthcare')->orderBy('id','desc')->get();
        $logistics = ZtlOurWorldWideProject::where('category','Logistics')->orderBy('id','desc')->get();
        $fintech = ZtlOurWorldWideProject::where('category','FinTech')->orderBy('id','desc')->get();
       $others = ZtlOurWorldWideProject::where('category','Others')->orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
            'projects' => $projects,
            'e_commerce' => $e_commerce,
            'IoT' => $IoT,
            'legal' => $legal,
            'health_care' => $health_care,
            'logistics' => $logistics,
            'fintech' => $fintech,
            'others' => $others,
            
         ]);
    }

    
    public function store(Request $request)
    {

            $projects = new ZtlOurWorldWideProject();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/projects/',$filename);
            $projects->image =$filename ;
         } 

           $projects->title = $request->title;
                            $projects->category = $request->category;

            $projects->save();


 return response()->json([
                'status' => 200,
                'message' => 'World Wide Project Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $projects = ZtlOurWorldWideProject::find($id);

        if ($projects)
        {
            return response()->json([
                'status' => 200,
                'projects' => $projects,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No World Wide Project Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $projects = ZtlOurWorldWideProject::find($id);
    if ($request->hasFile('image')) {
        if($projects->image != null){
            $file_path = 'images/projects/'.$projects->image;
            if(file_exists($file_path)){
                // unlink($file_path);
                File::delete($file_path);

            }
        }
        $file = $request->file('image');
        $original_name = $file->getClientOriginalName();
        $file_name = time().rand(1,0).$original_name;
        $file->move(public_path('images/projects/'),$file_name);
        $projects->image = $file_name;


     }
                  $projects->title = $request->title;
                  $projects->category = $request->category;

            $projects->update();


 return response()->json([
                'status' => 200,
                'message' => 'World Wide Project Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $projects = ZtlOurWorldWideProject::find($id);
        $file=$projects->image;
        $filename = public_path().'/images/projects/'.$file;
        File::delete($filename);

        $projects->delete();
            return response()->json([
                'status' => 200,
                'message' => 'World Wide Project deleted successfully',
            ]);

    
    }


}
