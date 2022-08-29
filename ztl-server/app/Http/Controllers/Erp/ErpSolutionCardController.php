<?php

namespace App\Http\Controllers\Erp;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlErpSolutionCard;
use Illuminate\Support\Facades\Validator;
use File;
class ErpSolutionCardController extends Controller
{
      public function index()
    {
                        $count = ZtlErpSolutionCard::orderBy('id','desc')->get()->count();

        $erp = ZtlErpSolutionCard::orderBy('id','asc')->get();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'erp' => $erp
         ]);
    }

    
    public function store(Request $request)
    {

            $erp = new ZtlErpSolutionCard();
           $erp->title = $request->title;
            $erp->short_description = $request->short_description;
            $erp->save();

                        $count = ZtlErpSolutionCard::orderBy('id','desc')->get()->count();

 return response()->json([
                'status' => 200,
                'count'=>$count,
                'message' => 'Erp Solution Card Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $erp = ZtlErpSolutionCard::find($id);

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
        $erp = ZtlErpSolutionCard::find($id);
           $erp->title = $request->title;
            $erp->short_description = $request->short_description;
            $erp->update();


        return response()->json([
                'status' => 200,
                'message' => 'Erp Solution Card  Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $erp = ZtlErpSolutionCard::find($id);
        $erp->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Erp Solution Card  deleted successfully',
            ]);

    
    }
}
