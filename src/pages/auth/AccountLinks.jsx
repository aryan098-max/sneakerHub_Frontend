import { Link } from "react-router"
import { useNavigate } from "react-router";
import { removeUser } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

const AccountLinks = ({setShowLoginForm, setIsProfileOpen}) => {

    // suscribing to the store 
    const user = useSelector((store)=>store?.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = async ()=>{

        try{
            // api call, during logout, pass an empty obj & {withCredentials:true}
            await axios.post(BASE_URL + "/logout",  {}, 
            { withCredentials: true })

              // Clear the Redux store
            dispatch(removeUser()); 
            
            // Close the dropdown menu
            setIsProfileOpen(false); 
            
            // Optional: Navigate home or to a login page
            navigate("/");

        } catch (err){
            console.log("Logout Failed:", err.message);
             // Even if backend fails, usually we clear client-side state anyway
            dispatch(removeUser());
            setIsProfileOpen(false); 
        }
    }

    
    const handleClick = ()=>{

        if(user){
            handleLogout()
        } else {
            setShowLoginForm(true);
        }
    }


  return (
    <div className="">
            <li className="border-b py-2 border-gray-700">
                <Link to="/account" onClick={()=>setIsProfileOpen(false)} className="text-white text-base px-4 py-2">
                My Account
                </Link>
            </li>

            <li className="border-b py-2 border-gray-700">
                <Link to="/wishlist" onClick={()=>setIsProfileOpen(false)} className="text-white text-base px-4 py-2">
                Wishlist
                </Link>
            </li>

            <li className="border-b py-2 border-gray-700">
                <Link to="/order" onClick={()=>setIsProfileOpen(false)} className="text-white text-base px-4 py-2">
                Check Order/Return
                </Link>
            </li>

            <li className="border-b py-2 border-gray-700 mb-2">
                <Link onClick={()=>setIsProfileOpen(false)} className="text-white text-base px-4 py-2">
                Language
                </Link>
            </li>
            <button   
                onClick={handleClick}
                className="bg-white text-center cursor-pointer font-semibold text-sm w-full p-1"
                type="button" // Good practice for accessibility since it acts like a button
            >
                {user ? "LOGOUT":"LOGIN"}
            </button>
            
    </div>
  )
}

export default AccountLinks;