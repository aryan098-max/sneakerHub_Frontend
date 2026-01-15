import { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";
import axios from "axios";

const LoginWithOtp = ({setShowLoginForm, setIsProfileOpen, handleNewUser, setShowOtpForm}) => {

  const [loginOtp, setLoginOtp] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false)

  // navigate and dispatch 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetOtp = async () => {
        if (!email) {
        setError("Email is required");
        return;
        }

        try {
        setLoading(true);
        setError("");

        await axios.post(
            `${BASE_URL}/auth/send-otp`,
            { email },
            { withCredentials: true }
        );

        // MOVED: Only set this to true upon successful API response
        setLoginOtp(true); 

        } catch (err) {
        setError(err.response.data.message || err.message);
        } finally {
        setLoading(false);
        }
    }
  // Verify OTP / Login
  const handleLogin = async () => {
    if (!otp) {
      setError("OTP is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        `${BASE_URL}/auth/verify-otp`,
        { email, otp },
        { withCredentials: true }
      );
      
      // Backend should return this flag
      if (res.data.isNewUser) {
        // load signup flow
        handleNewUser(res?.data?.data);
      } else {
        // dispatching an action
        dispatch(addUser(res?.data?.data));

        // navigation 
        navigate("/");

        // closing dropdown 
        setIsProfileOpen(false);

      }
    } catch (err) {
      setError(err.response.data.message || err.message);
    } finally {
      setLoading(false);
    }
  };

    return (

        <div className="p-2 w-full">
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

            {/* Email */}
            <div className="mb-4">
                <p className="text-white text-sm py-1">Email*</p>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-white p-2 text-white"
                    placeholder="Email"
                    type="email"
                />
            </div>

            {/* OTP */}
           {loginOtp && <div className="mb-4">
                <p className="text-white text-sm">OTP*</p>
                <input
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full border border-white p-2 text-white"
                    placeholder="One Time Password"
                />
            </div>
            }

            {/* Use conditional rendering for the primary action button */}
            {/* If loginOtp is FALSE, show "GET OTP" button */}
           { !loginOtp && <button
                type="button"
                disabled={loading}
                onClick={()=>{handleGetOtp()}}
                className="w-full bg-white font-semibold p-1 disabled:opacity-60"
                >
                {loading ? "Please Wait...": "GET OTP"}
            </button>}
        
    {loginOtp && <div>
                {/* Login Button */}
                { <button
                        type="button"
                        disabled={loading}
                        onClick={handleLogin}
                        className="w-full bg-white font-semibold p-1 disabled:opacity-60"
                        >
                        LOGIN
                    </button>}
                    
                    {/* Terms & Conditions */}
                
                        <p className="text-xs text-white mt-4">
                            By logging in, you accept the{" "}
                            <Link to="/policy/terms" className="underline">Terms</Link> and{" "}
                            <Link to="/policy/privacy" className="underline">Privacy Policy</Link>.
                        </p>

                        <button
                            onClick={()=>setLoginOtp(false)}
                            type="button"
                            className="text-white text-sm underline mt-4"
                        >
                            CHANGE EMAIL
                        </button>

            </div>}

            {/* Login with Email & Password */}
                <p 
                    onClick={()=>setShowOtpForm(false)}
                    className="font-semibold text-sm my-4 cursor-pointer underline text-white">
                    LOGIN WITH EMAIL & PASSWORD
                </p>
        
    </div>
    )
}

export default LoginWithOtp;
