<?php

namespace App\Http\Controllers\WeDdevelopment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlWebDevelopmentProject;
use Illuminate\Support\Facades\Validator;
class WebDevelopmentProjectsController extends Controller
{
      public function index()
    {
        $web_dev = ZtlWebDevelopmentProject::orderBy('id','asc')->get();
        return response()->json([
           'status' => 200,
            'web_dev' => $web_dev
         ]);
    }

    
    public function store(Request $request)
    {

            $web_dev = new ZtlWebDevelopmentProject();
           $web_dev->project_name = $request->project_name;
            $web_dev->technologies = $request->technologies;
            $web_dev->save();


 return response()->json([
                'status' => 200,
                'message' => 'Web Dev Project Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $web_dev = ZtlWebDevelopmentProject::find($id);

        if ($web_dev)
        {
            return response()->json([
                'status' => 200,
                'web_dev' => $web_dev,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No web_dev Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $web_dev = ZtlWebDevelopmentProject::find($id);
           $web_dev->project_name = $request->project_name;
            $web_dev->technologies = $request->technologies;
            $web_dev->update();


        return response()->json([
                'status' => 200,
                'message' => 'Web Dev Project  Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $web_dev = ZtlWebDevelopmentProject::find($id);
        $web_dev->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Web Dev Project  deleted successfully',
            ]);

    
    }
}
