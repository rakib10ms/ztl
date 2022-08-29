<?php

namespace App\Http\Controllers\NewsSection;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlNews;
use Illuminate\Support\Facades\Validator;
use File;
class AllNewsController extends Controller
{
      public function index()
    {
        $all_news = ZtlNews::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
            'all_news' => $all_news
         ]);
    }

    
    public function store(Request $request)
    {

            $all_news = new ZtlNews();
               if($request->hasFile('job_post_logo')){
            $file=$request->file('job_post_logo');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/job_list/',$filename);
            $all_news->job_post_logo =$filename ;
         } 

           $all_news->job_tittle = $request->job_tittle;
            $all_news->job_experience = $request->job_experience;
            $all_news->job_status = $request->job_status;
            $all_news->save();


 return response()->json([
                'status' => 200,
                'message' => 'News Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $all_news = ZtlNews::find($id);

        if ($all_news)
        {
            return response()->json([
                'status' => 200,
                'all_news' => $all_news,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No all_news Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $all_news = ZtlNews::find($id);
    if ($request->hasFile('job_post_logo')) {
        if($all_news->job_post_logo != null){
            $file_path = 'images/job_list/'.$all_news->job_post_logo;
            if(file_exists($file_path)){
                // unlink($file_path);
                File::delete($file_path);

            }
        }
        $file = $request->file('job_post_logo');
        $original_name = $file->getClientOriginalName();
        $file_name = time().rand(1,0).$original_name;
        $file->move(public_path('images/job_list/'),$file_name);
        $all_news->job_post_logo = $file_name;


     }
 
            $all_news->job_tittle = $request->job_tittle;
            $all_news->job_experience = $request->job_experience;
            $all_news->job_status = $request->job_status;
            $all_news->update();


 return response()->json([
                'status' => 200,
                'message' => 'News Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $all_news = ZtlNews::find($id);
        $file=$all_news->job_post_logo;
        $filename = public_path().'/images/job_list/'.$file;
        File::delete($filename);

        $all_news->delete();
            return response()->json([
                'status' => 200,
                'message' => 'News deleted successfully',
            ]);

    
    }

}
