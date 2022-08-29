<?php

namespace App\Http\Controllers\WeDdevelopment;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlWebDevelopmentFaq;
use Illuminate\Support\Facades\Validator;
class WebDevelopmentFaqController extends Controller
{
     public function index()
    {
        $faq = ZtlWebDevelopmentFaq::orderBy('id','asc')->get();
        return response()->json([
           'status' => 200,
            'faq' => $faq
         ]);
    }

    
    public function store(Request $request)
    {

            $faq = new ZtlWebDevelopmentFaq();
           $faq->faq_qtn = $request->faq_qtn;
            $faq->faq_ans = $request->faq_ans;
            $faq->save();


 return response()->json([
                'status' => 200,
                'message' => 'Faq Added Successfully',
            ]);   
     }

    public function edit($id)
    {
        $faq = ZtlWebDevelopmentFaq::find($id);

        if ($faq)
        {
            return response()->json([
                'status' => 200,
                'faq' => $faq,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No faq Found',
            ]);
        }

    }

    public function update(Request $request, $id)
    {
        $faq = ZtlWebDevelopmentFaq::find($id);
           $faq->faq_qtn = $request->faq_qtn;
            $faq->faq_ans = $request->faq_ans;
            $faq->update();


        return response()->json([
                'status' => 200,
                'message' => 'Faq Updated Successfully',
            ]);   
    }


    public function destroy($id)
    {
        $faq = ZtlWebDevelopmentFaq::find($id);
        $faq->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Faq deleted successfully',
            ]);

    
    }
}
