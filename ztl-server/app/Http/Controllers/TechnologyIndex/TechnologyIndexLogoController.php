<?php

namespace App\Http\Controllers\TechnologyIndex;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlTechnologyIndexLogo;
use Illuminate\Support\Facades\Validator;
use File;
class TechnologyIndexLogoController extends Controller
{
        public function index()
    {
        $technology_logo = ZtlTechnologyIndexLogo::orderBy('id','desc')->get();
                $count= ZtlTechnologyIndexLogo::orderBy('id','desc')->get()->count();

        return response()->json([
           'status' => 200,
                      'count'=>$count,

            'technology_logo' => $technology_logo
         ]);
    }

    
    public function store(Request $request)
    {
                $count= ZtlTechnologyIndexLogo::orderBy('id','desc')->get()->count();

            $technology_logo = new ZtlTechnologyIndexLogo();
               if($request->hasFile('technology_logo')){
            $file=$request->file('technology_logo');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/technology_index_logo/',$filename);
            $technology_logo->technology_logo =$filename ;
         } 

            $technology_logo->save();


 return response()->json([
                'status' => 200,
                 'count'=>$count,

                'message' => 'Technology Index Logo Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $technology_logo = ZtlTechnologyIndexLogo::find($id);

        if ($technology_logo)
        {
            return response()->json([
                'status' => 200,
                'technology_logo' => $technology_logo,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No technology_logo Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $technology_logo = ZtlTechnologyIndexLogo::find($id);
    if ($request->hasFile('technology_logo')) {
        if($technology_logo->technology_logo != null){
            $file_path = 'images/technology_index_logo/'.$technology_logo->technology_logo;
            if(file_exists($file_path)){
                // unlink($file_path);
                File::delete($file_path);

            }
        }
        $file = $request->file('technology_logo');
        $original_name = $file->getClientOriginalName();
        $file_name = time().rand(1,0).$original_name;
        $file->move(public_path('images/technology_index_logo/'),$file_name);
        $technology_logo->technology_logo = $file_name;


     }
 
            $technology_logo->update();


 return response()->json([
                'status' => 200,
                'message' => 'Technology Index Logo Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $technology_logo = ZtlTechnologyIndexLogo::find($id);
        $file=$technology_logo->technology_logo;
        $filename = public_path().'/images/technology_index_logo/'.$file;
        File::delete($filename);

        $technology_logo->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Technology Index Logo deleted successfully',
            ]);

    
    }
}
