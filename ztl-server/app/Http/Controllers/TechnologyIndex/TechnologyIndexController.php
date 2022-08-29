<?php

namespace App\Http\Controllers\TechnologyIndex;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlTechnologyIndex;
use Illuminate\Support\Facades\Validator;
class TechnologyIndexController extends Controller
{
     public function index()
    {
        $technology_index = ZtlTechnologyIndex::orderBy('id','desc')->get();
          $count= ZtlTechnologyIndex::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'technology_index' => $technology_index
         ]);
    }

    
    public function store(Request $request)
    {

            $technology_index = new ZtlTechnologyIndex();

           $technology_index->heading_name = $request->heading_name;
            $technology_index->heading_description = $request->heading_description;

            $technology_index->save();

          $count= ZtlTechnologyIndex::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                'count'=>$count,
                'message' => 'Technology Index Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $technology_index = ZtlTechnologyIndex::find($id);

        if ($technology_index)
        {
            return response()->json([
                'status' => 200,
                'technology_index' => $technology_index,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No technology_index Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $technology_index = ZtlTechnologyIndex::find($id);

            $technology_index->heading_name = $request->heading_name;
            $technology_index->heading_description = $request->heading_description;
            $technology_index->update();


 return response()->json([
                'status' => 200,
                'message' => 'Technology Index Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $technology_index = ZtlTechnologyIndex::find($id);
        $technology_index->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Technology Index deleted successfully',
            ]);

    
    }

}
