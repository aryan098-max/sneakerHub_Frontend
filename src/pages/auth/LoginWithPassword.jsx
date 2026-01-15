import { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../../redux/userSlice";
import { useNavigate } from "react-router";

const LoginWithPassword = ({setShowLoginForm, setIsProfileOpen, setShowOtpForm}) => {

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  // dispatcher 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Verify OTP / Login
  const handleLogin = async () => {
    if (!password) {
      setError("Password is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        `${BASE_URL}/auth/verify-otp`,
        { email, password },
        { withCredentials: true }
      );

      // dispatching an action
      dispatch(addUser(res?.data?.data));

      // navigate to main route
      navigate("/");

      // closing dropdown
      setIsProfileOpen(false);
      
    } catch (err) {
      setError(err?.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

    return (

        <div className="p-2 w-full">
            <div className="flex items-center justify-center p-1">
                <button
                type="button"
                onClick={(e) =>{
                 e.stopPropagation()
                 setShowLoginForm(false)
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
                <p className="text-white py-1 text-sm">Email*</p>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-white p-2 text-white"
                    required
                    placeholder="Email"
                    type="email"
                />
            </div>

            {/* Password */}
            <div className="mb-4">
                <p className="text-white py-1 text-sm">Password*</p>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border border-white p-2 text-white"
                    placeholder="Password"
                    type="password"
                />
            </div>

            <button
                type="button"
                disabled={loading}
                onClick={handleLogin}
                className="w-full bg-white font-semibold p-1 disabled:opacity-60"
                >
                 LOGIN
             </button>

             <p
                onClick={()=>setShowOtpForm(true)}
                className="font-semibold my-4 cursor-pointer underline text-sm text-white">
                LOGIN WITH EMAIL & OTP
            </p>

        </div>
    )
}

export default LoginWithPassword;
