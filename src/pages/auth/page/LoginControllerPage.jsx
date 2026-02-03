import { useState } from "react";
import LoginWithOtpPage from "./LoginWithOtpPage";
import LoginWithPasswordPage from "./LoginWithPasswordPage";
import SignupPage from './SignupPage'

const LoginControllerPage = () => {

  const [showOtpForm, setShowOtpForm] = useState(true);

  const hanleLoginPassword = ()=>{

    setShowOtpForm(prev => !prev);
  }

  const handleNewUser = ()=>{
      <SignupPage/>
  }
  
  return (
    <div className="min-h-screen bg-white">
      
      {/* Page title */}
      <div className="px-10 pb-20">
        <h1 className="font-bold text-4xl">My account</h1>
      </div>

     <div className="flex justify-center">
        <div className="w-full md:w-1/2 px-6">
          
          <h2 className="font-bold text-lg text-center">
            Login / Join Us
          </h2>

          <hr className="border-t-2 border-black my-4" />

          {showOtpForm ? <LoginWithOtpPage handleNewUser={handleNewUser}/>: <LoginWithPasswordPage/>}

          <p 
            onClick={hanleLoginPassword}
            className="text-sm cursor-pointer underline font-bold my-4"
          >
          {showOtpForm ? "LOGIN WITH EMAIL & OTP":"LOGIN WITH EMAIL AND PASSWORD"}
          </p>
                    
        </div>
      </div>

    </div>
  );
};

export default LoginControllerPage;
