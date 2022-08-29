<?php

namespace App\Http\Controllers\HealthCare;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlHealthCareCard;
use Illuminate\Support\Facades\Validator;
use File;
class HealthCareCardController extends Controller
{
     public function index()
    {
        $health = ZtlHealthCareCard::orderBy('id','asc')->get();
        return response()->json([
           'status' => 200,
            'health' => $health
         ]);
    }

    
    public function store(Request $request)
    {

            $health = new ZtlHealthCareCard();
           $health->title = $request->title;
            $health->short_description = $request->short_description;
            $health->save();


 return response()->json([
                'status' => 200,
                'message' => 'Health Care Card Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $health = ZtlHealthCareCard::find($id);

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
        $health = ZtlHealthCareCard::find($id);
           $health->title = $request->title;
            $health->short_description = $request->short_description;
            $health->update();


        return response()->json([
                'status' => 200,
                'message' => 'Health Care Card  Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $health = ZtlHealthCareCard::find($id);
        $health->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Health Care Card  deleted successfully',
            ]);

    
    }
}
