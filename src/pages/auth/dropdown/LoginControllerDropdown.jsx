import { useState } from "react";
import LoginWithOtpDropdown from "./LoginWithOtpDropdown";
import LoginWithPasswordDropdown from "./LoginWithPasswordDropdown.jsx";
import SignupFormDropdown from "./SignupFormDropdown.jsx";

// Login flow steps (single source of truth)
const LoginControllerDropdown = ({setShowLoginForm, setIsProfileOpen}) => {

  const [showOtpForm, setShowOtpForm] = useState(true);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [newUserData, setNewUserData] = useState(null);
  
  // Handling New Userr
  const handleNewUser =(uesrData)=>{
    setNewUserData(uesrData);
    setShowSignUpForm(true);
  }

  if(showSignUpForm){
    return <SignupFormDropdown setShowLoginForm={setShowLoginForm} setIsProfileOpen={setIsProfileOpen} newUserData={newUserData}/>
  }

 /* setShowLoginForm=ChevronLeftButton, handleNewUser=SignupForm, setShowOtpForm=OtpForm, setIsProfileOpen=closing menu  */
  return(      
    showOtpForm ?
    (<LoginWithOtpDropdown setIsProfileOpen={setIsProfileOpen} setShowLoginForm={setShowLoginForm} handleNewUser={handleNewUser} setShowOtpForm={setShowOtpForm}/>): 
    (<LoginWithPasswordDropdown setIsProfileOpen={setIsProfileOpen} setShowLoginForm={setShowLoginForm} setShowOtpForm={setShowOtpForm}/>)
  )

};

export default LoginControllerDropdown;
