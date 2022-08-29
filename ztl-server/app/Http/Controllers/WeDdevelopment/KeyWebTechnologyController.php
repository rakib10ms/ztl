<?php

namespace App\Http\Controllers\WeDdevelopment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlKeyWebTechnology;
use Illuminate\Support\Facades\Validator;
class KeyWebTechnologyController extends Controller
{
     public function index()
    {
        $web = ZtlKeyWebTechnology::orderBy('id','asc')->get();
                $count= ZtlKeyWebTechnology::orderBy('id','desc')->get()->count();

        return response()->json([
           'status' => 200,
                      'count'=>$count,

            'web' => $web
         ]);
    }

    
    public function store(Request $request)
    {
            $web = new ZtlKeyWebTechnology();
           $web->short_description = $request->short_description;

            $web->save();

                $count= ZtlKeyWebTechnology::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                'count'=>$count,

                'message' => 'Key Web Technology Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $web = ZtlKeyWebTechnology::find($id);

        if ($web)
        {
            return response()->json([
                'status' => 200,
                'web' => $web,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No web Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $web = ZtlKeyWebTechnology::find($id);
           $web->short_description = $request->short_description;
            $web->update();


        return response()->json([
                'status' => 200,
                'message' => 'Key Web Technology Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $web = ZtlKeyWebTechnology::find($id);
        $web->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Key Web Technology deleted successfully',
            ]);

    
    }
}
