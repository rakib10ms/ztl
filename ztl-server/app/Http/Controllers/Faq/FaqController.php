<?php

namespace App\Http\Controllers\Faq;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlFaq;
use Illuminate\Support\Facades\Validator;
class FaqController extends Controller
{
     public function index()
    {
        $faq = ZtlFaq::orderBy('id','asc')->get();
        return response()->json([
           'status' => 200,
            'faq' => $faq
         ]);
    }

    
    public function store(Request $request)
    {

            $faq = new ZtlFaq();
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
        $faq = ZtlFaq::find($id);

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
        $faq = ZtlFaq::find($id);
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
        $faq = ZtlFaq::find($id);
        $faq->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Faq deleted successfully',
            ]);

    
    }
}
