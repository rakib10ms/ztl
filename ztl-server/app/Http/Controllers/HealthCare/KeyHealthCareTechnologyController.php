<?php

namespace App\Http\Controllers\HealthCare;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlKeyHealthCareTechnology;
use Illuminate\Support\Facades\Validator;
class KeyHealthCareTechnologyController extends Controller
{
    public function index()
    {
        $health = ZtlKeyHealthCareTechnology::orderBy('id','asc')->get();
                $count= ZtlKeyHealthCareTechnology::orderBy('id','desc')->get()->count();

        return response()->json([
           'status' => 200,
                      'count'=>$count,

            'health' => $health
         ]);
    }

    
    public function store(Request $request)
    {
            $health = new ZtlKeyHealthCareTechnology();
           $health->short_description = $request->short_description;

            $health->save();

                $count= ZtlKeyHealthCareTechnology::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                'count'=>$count,

                'message' => 'Key health Technology Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $health = ZtlKeyHealthCareTechnology::find($id);

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
        $health = ZtlKeyHealthCareTechnology::find($id);
           $health->short_description = $request->short_description;
            $health->update();


        return response()->json([
                'status' => 200,
                'message' => 'Key health Technology Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $health = ZtlKeyHealthCareTechnology::find($id);
        $health->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Key health Technology deleted successfully',
            ]);

    
    }
}
