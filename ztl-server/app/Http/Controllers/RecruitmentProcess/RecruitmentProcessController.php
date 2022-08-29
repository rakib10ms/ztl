<?php

namespace App\Http\Controllers\RecruitmentProcess;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlRecruitmentProcess;
use Illuminate\Support\Facades\Validator;
class RecruitmentProcessController extends Controller
{
      public function index()
    {
        $recruitment= ZtlRecruitmentProcess::orderBy('id','asc')->get();
        return response()->json([
           'status' => 200,
            'recruitment' => $recruitment
         ]);
    }

    
    public function store(Request $request)
    {

            $recruitment= new ZtlRecruitmentProcess();
          $recruitment->process_name = $request->process_name;
            $recruitment->process_description = $request->process_description;
            $recruitment->save();


 return response()->json([
                'status' => 200,
                'message' => 'Recruitment Process Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $recruitment= ZtlRecruitmentProcess::find($id);

        if ($recruitment)
        {
            return response()->json([
                'status' => 200,
                'recruitment' => $recruitment,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No recruitment Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $recruitment= ZtlRecruitmentProcess::find($id);
           $recruitment->process_name = $request->process_name;
            $recruitment->process_description = $request->process_description;
            $recruitment->update();


        return response()->json([
                'status' => 200,
                'message' => 'Recruitment Process Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $recruitment= ZtlRecruitmentProcess::find($id);
        $recruitment->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Recruitment Process deleted successfully',
            ]);

    
    }
}
