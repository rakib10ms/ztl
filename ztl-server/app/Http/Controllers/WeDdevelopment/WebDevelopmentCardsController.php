<?php

namespace App\Http\Controllers\WeDdevelopment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlWebDevelopmentCard;
use Illuminate\Support\Facades\Validator;
class WebDevelopmentCardsController extends Controller
{
    
     public function index()
    {
        $web_dev = ZtlWebDevelopmentCard::orderBy('id','asc')->get();
        return response()->json([
           'status' => 200,
            'web_dev' => $web_dev
         ]);
    }

    
    public function store(Request $request)
    {

            $web_dev = new ZtlWebDevelopmentCard();
           $web_dev->title = $request->title;
            $web_dev->short_description = $request->short_description;
            $web_dev->save();


 return response()->json([
                'status' => 200,
                'message' => 'Web Dev Project Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $web_dev = ZtlWebDevelopmentCard::find($id);

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
        $web_dev = ZtlWebDevelopmentCard::find($id);
           $web_dev->title = $request->title;
            $web_dev->short_description = $request->short_description;
            $web_dev->update();


        return response()->json([
                'status' => 200,
                'message' => 'Web Dev Project  Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $web_dev = ZtlWebDevelopmentCard::find($id);
        $web_dev->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Web Dev Project  deleted successfully',
            ]);

    
    }
}
