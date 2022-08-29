<?php

namespace App\Http\Controllers\Portfolio;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ZtlPortfolioProduct;
use Illuminate\Support\Facades\Validator;
use File;
class PortfolioProductController extends Controller
{
    
        public function index()
    {

        $all = ZtlPortfolioProduct::orderBy('id','desc')->get();



        $all_industries = ZtlPortfolioProduct::orderBy('id','desc')->where('option','By Industries')->get();
        $e_commerce = ZtlPortfolioProduct::where('category','E-Commerce')->orderBy('id','desc')->get();
        $IoT = ZtlPortfolioProduct::where('category','IoT')->orderBy('id','desc')->get();
        $legal = ZtlPortfolioProduct::where('category','Legal & Law')->orderBy('id','desc')->get();
        $health_care = ZtlPortfolioProduct::where('category','Healthcare')->orderBy('id','desc')->get();
        $logistics = ZtlPortfolioProduct::where('category','Logistics')->orderBy('id','desc')->get();
        $fintech = ZtlPortfolioProduct::where('category','FinTech')->orderBy('id','desc')->get();
       $industries_others = ZtlPortfolioProduct::where('category','Others')->where('option','By Industries')->orderBy('id','desc')->get();



        $all_technologies = ZtlPortfolioProduct::orderBy('id','desc')->where('option','By Technologies')->get();

       $Python=ZtlPortfolioProduct::where('category','Python')->orderBy('id','desc')->get();
       $Php=ZtlPortfolioProduct::where('category','Php')->orderBy('id','desc')->get();
       $Javascript=ZtlPortfolioProduct::where('category','Javascript')->orderBy('id','desc')->get();
       $Django=ZtlPortfolioProduct::where('category','Django')->orderBy('id','desc')->get();
       $Laravel=ZtlPortfolioProduct::where('category','Laravel')->orderBy('id','desc')->get();
       $Flutter=ZtlPortfolioProduct::where('category','Flutter')->orderBy('id','desc')->get();
       $Asp=ZtlPortfolioProduct::where('category','Asp.Net')->orderBy('id','desc')->get();
       $Machine=ZtlPortfolioProduct::where('category','Machine Learning')->orderBy('id','desc')->get();
       $Java=ZtlPortfolioProduct::where('category','Java')->orderBy('id','desc')->get();
       $React=ZtlPortfolioProduct::where('category','React Js')->orderBy('id','desc')->get();
       $tech_Others=ZtlPortfolioProduct::where('category','Others')->where('option','By Technologies')->orderBy('id','desc')->get();



        return response()->json([
           'status' => 200,
           'all'=>$all,
            'all_industries' => $all_industries,
            'e_commerce' => $e_commerce,
            'IoT' => $IoT,
            'legal' => $legal,
            'health_care' => $health_care,
            'logistics' => $logistics,
            'fintech' => $fintech,
            'industries_others' => $industries_others,
        'all_technologies' => $all_technologies,
         'Python' => $Python,
         'Php' => $Php,
         'Javascript' => $Javascript,
         'Django' => $Django,
         'Laravel' => $Laravel,
         'Flutter' => $Flutter,
         'Asp' => $Asp,
         'Machine' => $Machine,
         'Java' => $Java,
         'React' => $React,
         'tech_Others'=>$tech_Others




            
         ]);
    }

    
    public function store(Request $request)
    {

            $projects = new ZtlPortfolioProduct();
               if($request->hasFile('image')){
            $file=$request->file('image');
            $extension=$file->getClientOriginalExtension();
            $filename=time().'.'.$extension;
            $file->move('images/projects/',$filename);
            $projects->image =$filename ;
         } 

           $projects->title = $request->title;
                            $projects->category = $request->category;
                            $projects->option = $request->option;

            $projects->save();


 return response()->json([
                'status' => 200,
                'message' => 'Portfolio Product Added Successfully',
            ]);   
     }


   public function edit($id)
    {
        $projects = ZtlPortfolioProduct::find($id);

        if ($projects)
        {
            return response()->json([
                'status' => 200,
                'projects' => $projects,
            ]);

        }else{
            return response()->json([
                'status' => 404,
                'message' => 'No Portfolio Product Found',
            ]);
        }

    }

public function update(Request $request,$id){

 $projects = ZtlPortfolioProduct::find($id);
    if ($request->hasFile('image')) {
        if($projects->image != null){
            $file_path = 'images/projects/'.$projects->image;
            if(file_exists($file_path)){
                // unlink($file_path);
                File::delete($file_path);

            }
        }
        $file = $request->file('image');
        $original_name = $file->getClientOriginalName();
        $file_name = time().rand(1,0).$original_name;
        $file->move(public_path('images/projects/'),$file_name);
        $projects->image = $file_name;


     }
                  $projects->title = $request->title;
                    $projects->option = $request->option;

                  $projects->category = $request->category;

            $projects->update();


 return response()->json([
                'status' => 200,
                'message' => 'Portfolio Product Updated Successfully',
            ]);   
    }

   public function destroy($id)
    {
        $projects = ZtlPortfolioProduct::find($id);
        $file=$projects->image;
        $filename = public_path().'/images/projects/'.$file;
        File::delete($filename);

        $projects->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Portfolio Product deleted successfully',
            ]);

    
    }


}
