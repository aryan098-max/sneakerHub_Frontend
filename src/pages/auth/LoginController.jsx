import { useState } from "react";
import LoginWithOtp from "./LoginWithOtp";
import LoginWithPassword from "./LoginWithPassword";
import SignupForm from "./SignupForm";

// Login flow steps (single source of truth)
const LoginController = ({setShowLoginForm, setIsProfileOpen}) => {

  const [showOtpForm, setShowOtpForm] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [newUserData, setNewUserData] = useState(null)
  
  const handleNewUser =(uesrData)=>{
    setNewUserData(uesrData);
    setShowSignUpForm(true);
  }

  if(showSignUpForm){
    return <SignupForm setShowLoginForm={setShowLoginForm} setIsProfileOpen={setIsProfileOpen} newUserData={newUserData}/>
  }

 /* setShowLoginForm=ChevronLeftButton, handleNewUser=SignupForm, setShowOtpForm=OtpForm, setIsProfileOpen=closing menu  */
  return(      
    showOtpForm ?
    (<LoginWithOtp setIsProfileOpen={setIsProfileOpen} setShowLoginForm={setShowLoginForm} handleNewUser={handleNewUser} setShowOtpForm={setShowOtpForm}/>): 
    (<LoginWithPassword setIsProfileOpen={setIsProfileOpen} setShowLoginForm={setShowLoginForm} setShowOtpForm={setShowOtpForm}/>)
  )

};

export default LoginController;
