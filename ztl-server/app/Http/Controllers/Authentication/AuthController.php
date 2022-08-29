<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\ZtlAdmin;
use Illuminate\Support\Facades\Hash;
use DB; 
use Carbon\Carbon; 
use Mail; 
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator=Validator::make($request->all(),
            [

                'name'=>'required|max:191',
                'email'=>'required|email|max:191|unique:users,email',
                'password'=>'required|min:8'

            ]

    );

        if($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        }
        else{
            $user=User::create([
              'name'=>$request->name,
              'email'=>$request->email,
              'password'=>Hash::make($request->password),
            ]);

            $token=$user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'message'=>'Registration Successfull'
            ]);
        }
    }


//user login 
    public function login(Request $request){
     $validator=Validator::make($request->all(),
            [

                'email'=>'required|email|max:191',
                'password'=>'required|min:8'

            ]

    );

        if($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        }
        else{
            $user=User::where('email',$request->email)->first();

            if(!$user || !Hash::check($request->password,$user->password)){
   return response()->json([
                'status'=>401,
                'message'=>'Invalid Credentials',
            ]);
            }
            else{
                      $token=$user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'user_type'=>$user->user_type,
                'token'=>$token,
                'email'=>$user->email,
                'message'=>'User Logged in Successfull'
            ]);
            }

        }
    }



    public function logout(){
        auth()->user()->tokens()->delete();
           return response()->json([
                'status'=>200,
                'message'=>'Logged Out Successfull'
            ]);
    }


//admin logout

    public function adminLogout(){
   auth()->user()->tokens()->delete();
           return response()->json([
                'status'=>200,
                'message'=>'Admin Logged Out Successfull'
            ]);
     }


    //user registration 

     public function saveUserRegister(Request $request){
        // dd('all request',$request->all());
        $validator=Validator::make($request->all(),
            [

                'name'=>'required|max:191',
                'email'=>'required|email|max:191|unique:users,email',
                'password'=>'required|min:8'

            ]

    );

        if($validator->fails()){
            return response()->json([
                'validation_errors'=>$validator->messages(),
            ]);
        }
        else{
            // $user=User::create([
            //   'name'=>$request->name,
            //   'email'=>$request->email,
            //   'phone'=>$request->phone,
            //   'user_type'=>$request->user_type,
            //   'password'=>Hash::make($request->password),
            // ]);
            $user = new User();
        $user->name = $request->input('name');
        $user->phone = $request->input('phone');
        $user->user_type = $request->input('user_type');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->password);
        $user->save();

            $token=$user->createToken($user->email.'_Token')->plainTextToken;

            return response()->json([
                'status'=>200,
                'username'=>$user->name,
                'token'=>$token,
                'user'=>$user,
                'user_type'=>$request->user_type,
                'message'=>'Registration Successfull'
            ]);
        }
    }



    //admin register


  //   public function saveAdminRegister(Request $request){
  // $validator=Validator::make($request->all(),
  //           [

  //               'name'=>'required|max:191',
  //               'email'=>'required|email|max:191|unique:users,email',
  //               'password'=>'required|min:8'

  //           ]

  //   );

  //       if($validator->fails()){
  //           return response()->json([
  //               'validation_errors'=>$validator->messages(),
  //           ]);
  //       }
  //       else{
         
  //       $admin = new ZtlAdmin();
  //       $admin->name = $request->input('name');
  //       $admin->user_type = $request->input('user_type');
  //       $admin->email = $request->input('email');
  //       $admin->password = Hash::make($request->password);
  //       $admin->save();

  //           $token=$admin->createToken($admin->email.'_Token')->plainTextToken;

  //           return response()->json([
  //               'status'=>200,
  //               'username'=>$admin->name,
  //               'token'=>$token,
  //               'admin'=>$admin,
  //               'user_type'=>$request->user_type,
  //               'message'=>'Admin Registration Successfull'
  //           ]);
  //       }
  //   }



 //    public function superAdminLogin(Request $request){
 // $validator=Validator::make($request->all(),
 //            [

 //                'email'=>'required|email|max:191',
 //                'password'=>'required|min:8'

 //            ]

 //    );

 //        if($validator->fails()){
 //            return response()->json([
 //                'validation_errors'=>$validator->messages(),
 //            ]);
 //        }
 //        else{
 //            $user=User::where('email',$request->email)->first();

 //            if(!$admin || !Hash::check($request->password,$admin->password)){
 //   return response()->json([
 //                'status'=>401,
 //                'message'=>'Invalid Credentials',
 //            ]);
 //            }
 //            else{
 //                      $token=$admin->createToken($admin->email.'_Token')->plainTextToken;

 //            return response()->json([
 //                'status'=>200,
 //                'username'=>$admin->name,
 //                'usertype'=>$admin->user_type,
 //                'token'=>$token,
 //                'email'=>$admin->email,
 //                'message'=>'Admin Logged in Successfull'
 //            ]);
 //            }

 //        }
 //    }



    //forgot password 

      //   public function submitForgetPasswordForm(Request $request)
      // {
      //     $check=$request->validate([
      //         'email' => 'required|email|exists:users',
      //     ]);
  
      //     $token = Str::random(64);
  
      //     DB::table('password_resets')->insert([
      //         'email' => $request->email, 
      //         'token' => $token, 
      //         'created_at' => Carbon::now()
      //       ]);
  
      //     // Mail::send('email.forgetPassword', ['token' => $token], function($message) use($request){
      //     //     $message->to($request->email);
      //     //     $message->subject('Reset Password');
      //     // });
  
      //        return response()->json([
      //           'status'=>200,
                
      //           'token'=>$token,
      //           'check'=>$check,
      //           // 'user_type'=>$request->user_type,
      //           'message'=>'We have e-mailed your password reset link!'
      //       ]);
      // }




      public function submitForgetPasswordForm(Request $request){
            $input = $request->only('email');
            $validator = Validator::make($input, [
                'email' => "required|email|exists:users"
            ]);
            if ($validator->fails()) {
                return response()->json([
                'status'=>400,
                'datas'=>$validator->errors(),
                'message'=>'Email doesnot match invalid'
            ]);
            }
            else{
     $response = Password::sendResetLink($input);

            $message = $response == Password::RESET_LINK_SENT ? 'Mail send successfully' : GLOBAL_SOMETHING_WANTS_TO_WRONG;
            
            // return response()->json($message);

            return response()->json([

                'status'=>200,
                'message'=>'We have sent forgot password in your gmail!'
             ]);

            }
           
    }
}
