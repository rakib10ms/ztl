<?php

namespace App\Http\Controllers\Counter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlCounter;
use Illuminate\Support\Facades\Validator;
class CounterController extends Controller
{
      public function index()
    {
        $counter= ZtlCounter::orderBy('id','asc')->get();

        $count= ZtlCounter::orderBy('id','desc')->get()->count();
        return response()->json([
           'status' => 200,
           'count'=>$count,
            'counter' => $counter
         ]);
    }

    
    public function store(Request $request)
    {
        $count= ZtlCounter::orderBy('id','desc')->get()->count();

            $counter= new ZtlCounter();
          $counter->total_countries = $request->total_countries;
          $counter->total_clients = $request->total_clients;
            $counter->total_projects = $request->total_projects;
            $counter->save();


 return response()->json([
                'status' => 200,
                    'count'=>$count,

                'message' => 'Counter Data Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $counter= ZtlCounter::find($id);

        if ($counter)
        {
            return response()->json([
                'status' => 200,
                'counter' => $counter,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No counter Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $counter= ZtlCounter::find($id);
            $counter->total_countries = $request->total_countries;
          $counter->total_clients = $request->total_clients;
            $counter->total_projects = $request->total_projects;
            $counter->save();
            $counter->update();


        return response()->json([
                'status' => 200,
                'message' => 'Counter Data Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $counter= ZtlCounter::find($id);
        $counter->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Counter Data deleted successfully',
            ]);

    
    }
}
