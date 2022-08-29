<?php

namespace App\Http\Controllers\Erp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlKeyErpTechnology;
use Illuminate\Support\Facades\Validator;
class KeyErpTechnologyController extends Controller
{
    public function index()
    {
        $erp = ZtlKeyErpTechnology::orderBy('id','asc')->get();
                $count= ZtlKeyErpTechnology::orderBy('id','desc')->get()->count();

        return response()->json([
           'status' => 200,
                      'count'=>$count,

            'erp' => $erp
         ]);
    }

    
    public function store(Request $request)
    {
            $erp = new ZtlKeyErpTechnology();
           $erp->short_description = $request->short_description;

            $erp->save();

                $count= ZtlKeyErpTechnology::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                'count'=>$count,

                'message' => 'Key erp Technology Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $erp = ZtlKeyErpTechnology::find($id);

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

    public function update(Request $request, $id)
    {
        $erp = ZtlKeyErpTechnology::find($id);
           $erp->short_description = $request->short_description;
            $erp->update();


        return response()->json([
                'status' => 200,
                'message' => 'Key erp Technology Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $erp = ZtlKeyErpTechnology::find($id);
        $erp->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Key erp Technology deleted successfully',
            ]);

    
    }
}
