<?php

namespace App\Http\Controllers\AboutUs;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlHowWeWork;
use Illuminate\Support\Facades\Validator;
use File;
class HowWeWorkController extends Controller
{
     public function index()
    {
                $count = ZtlHowWeWork::orderBy('id','desc')->get()->count();

        $work = ZtlHowWeWork::orderBy('id','desc')->get();
        return response()->json([
           'status' => 200,
             'count'=>$count,

            'work' => $work
         ]);
    }

    
    public function store(Request $request)
    {

            $work = new ZtlHowWeWork();
        
         

           $work->short_description = $request->short_description;
            $work->save();

                $count = ZtlHowWeWork::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                 'count'=>$count,
                'message' => 'How We Work Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $work = ZtlHowWeWork::find($id);

        if ($work)
        {
            return response()->json([
                'status' => 200,
                'work' => $work,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No work Found',
            ]);
        }

    }

public function update(Request $request,$id){

             $update_work=ZtlHowWeWork::find($id);

           
          $update_work->short_description = $request->short_description;
            
            $update_work->update();

 return response()->json([
                'status' => 200,
                'message' => 'How We Work Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $work = ZtlHowWeWork::find($id);
        $file=$work->image;
        $filename = public_path().'/images/work/'.$file;
        File::delete($filename);

        $work->delete();
            return response()->json([
                'status' => 200,
                'message' => 'How We Work deleted successfully',
            ]);

    
    }
}
