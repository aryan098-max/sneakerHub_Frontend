import axios from "axios";
import { useEffect, useState } from "react"
import { BASE_URL } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../../../redux/userSlice";
import { ChevronLeftIcon, EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const SignupFormDropdown = ({setShowLoginForm, setIsProfileOpen, newUserData}) => {

  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false);

  // dispatcher 
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // useEffect() for setting the email value
  useEffect(()=>{
    if(newUserData?.email){
      setEmail(newUserData?.email)
    }
  },[newUserData])


  const togglePasswordVisibility = ()=>{
    setShowPassword(!showPassword);
  }
  
  const handelSignUp = async ()=>{

    const missingFields = [];

    if (!firstName) missingFields.push("First Name");
    if (!lastName) missingFields.push("Last Name");
    if (!phone) missingFields.push("Phone Number");
    if (!email) missingFields.push("Email");
    if (!password) missingFields.push("Password");

    if(missingFields.length>0){
      const errorMessage = `${missingFields.join(', ')} are required.`;
      setError(errorMessage);
      return;
    }
 
    try{
      setLoading(true);
      setError("");

      const res = await axios.post(BASE_URL + `/auth/signup`,{
        firstName, lastName, phone, email, password
      }, {withCredentials:true});

    // dispatching an action 
    dispatch(addUser(res?.data?.data));

    // navigation
    navigate("/")

    // Close the dropdown after successfull loggedIn
    setIsProfileOpen(false);

    } catch(err){
      setError(err?.response?.data?.message || err.message);
    } finally{
      setLoading(false)
    }

  }

  return (
    <div className='p-4 w-full'>

       <div className="flex items-center justify-center p-1">
            <button
            type="button"
            onClick={() =>{
                setShowLoginForm(false);
              }}
            >
            <ChevronLeftIcon className="w-5 text-white" />
            </button>
            <h1 className="text-white text-base p-2">Login</h1>
       </div>

      
            {/* Error */}
            {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

            {/* FirstName */}

            <div className="mb-2">
                <p className="text-white text-sm py-1">FirstName*</p>
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-white p-2 text-white"
                    placeholder="FirstName"
                    type="text"
                />
            </div>

            {/* LastName */}

                <div className="mb-2">
                <p className="text-white text-sm py-1">LastName*</p>
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border border-white p-2 text-white"
                    placeholder="LastName"
                    type="text"
                />
            </div>

            {/* Phone */}

                <div className="mb-2">
                <p className="text-white text-sm py-1">Phone*</p>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-white p-2 text-white"
                    placeholder="Phone"
                    type="text"
                />
            </div>

            {/* Email */}
            <div className="mb-2">
                <p className="text-white text-sm py-1">Email*</p>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-white p-2 text-white"
                    placeholder="Email"
                    type="email"
                />
            </div>

            {/* password */}
            <div className="relative mb-4">
                <p className="text-white py-1 text-sm">Password*</p>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border border-white p-2 text-white"
                    placeholder="Password"
                    type={showPassword?"text":"password"}
                />
              <button
                type="button" // Important for buttons inside forms that shouldn't submit
                onClick={togglePasswordVisibility}
                className="absolute inset-y-12 right-0 flex items-center pr-3"

              >
                {/* Dynamically display the correct icon */}
                {showPassword ? (
                    <EyeSlashIcon className="text-white h-5 w-5" />
                ) : (
                    <EyeIcon className="text-white h-5 w-5" />
                )}
             </button>
            </div>

            <button
              className="w-full bg-white font-semibold p-1 disabled:opacity-60"
              type="button"
              disabled={loading}
              onClick={handelSignUp}
             >{loading?"Please Wait..." : "CONTINUE"}
            </button>
            
            <div className="py-4">
              <label className="label">
                <input type="checkbox" defaultChecked className="checkbox bg-white" />
                <span className="text-white">I agree to terms and conditions</span>
              </label>
            </div>
           

    </div>
  )
}

export default SignupFormDropdown