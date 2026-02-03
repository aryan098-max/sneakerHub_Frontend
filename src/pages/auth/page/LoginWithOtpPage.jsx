import axios from 'axios'
import { addUser } from '../../../redux/userSlice';
import { useState } from "react";
import { BASE_URL } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";

const LoginWithOtpPage = ({handleNewUser}) => {

  const [loginOtp, setLoginOtp] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  // navigate and dispatch 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGetOtp = async ()=>{

      if(!email){
        setError("Email is required");
        return;
      }

      try{
        setLoading(true);
        setError("");

        await axios.post(`${BASE_URL}/auth/send-otp`,
            { email },
            { withCredentials: true }
          )
          
        // MOVED: Only set this to true upon successful API response
        setLoginOtp(true);

      } catch(err){
        setError(err.response.data.message || err.message);
      } finally{
        setLoading(false)
      }
  }

  const handleLogin = async ()=>{

    if(!otp){
      setError("OTP is required");
      return;
    }

    try{
      setLoading(true);
      setError("");

      const res = await axios.post(`${BASE_URL}/auth/verify-otp`,{otp},{withCredentials:true});

      // Backend should return this flag
      if (res.data.isNewUser) {
        // load signup flow
        handleNewUser(res?.data?.data);
      } else {
        // dispatching an action
        dispatch(addUser(res?.data?.data));

        // navigation 
        navigate("/");
      }

    } catch(err){
      setError(err.response.data.message || err.message);

    } finally{
      setLoading(false);
    }
  }

  return (
    <div>

    <p className="my-6">An OTP will be sent to your email for verification</p>

    { loginOtp && <button
        onClick={()=>setLoginOtp(false)}
        type="button"
        className="text-sm font-bold underline"
    >
        CHANGE EMAIL
    </button>}

      {/* Error */}
      {error && <p className="text-red-400 text-sm">{error}</p>}

        <div>

            {/* Email */}
            <div className="my-6">
            <p className="font-bold text-xs py-1">Email*</p>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-black p-3"
                placeholder="Email"
                type="text"
            />
            </div>


            {/* OTP */}
            {loginOtp && <div className="mt-2 mb-6">
            <p className="font-bold text-xs py-1">OTP*</p>
            <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-black p-3"
                placeholder="One Time Password"
                type="text"
            />
            </div>}

            {/*Get Otp*/}
            <button 
              type="button"
              disabled={loading}
              onClick={handleGetOtp}
              className="bg-gray-300 cursor-pointer w-full font-semibold py-2 disabled:opacity-60"
            >
                {loading ? "Please Wait..." : "GET OTP"}
            </button>

          { loginOtp &&
            <div>
              <button
                type="button"
                disabled={loading}
                onClick={handleLogin}
                className="w-full bg-white font-semibold p-1 disabled:opacity-60"
              >
                LOGIN
              </button>

              <p className="text-sm my-6">
                  By logging in, you accept the{" "}
                  <Link to="/policy/terms" className="underline">Terms & Conditions</Link> and{" "}
                  <Link to="/policy/privacy" className="underline">Privacy Policy</Link>.
              </p>
           </div>
           }
        
          </div>
         
    </div>
    
  )
}

export default LoginWithOtpPage