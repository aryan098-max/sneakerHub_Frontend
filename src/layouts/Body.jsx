import { useEffect } from "react";
import { Outlet } from "react-router";
import { addUser } from "../redux/userSlice";   
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TopInforBar from "../components/TopInfoBar";
import axios from "axios";

const Body = () => {

  // dispatcher & selector
  const dispatch = useDispatch();
  const user = useSelector((store)=>store?.user);

  // fetching user after reloading
  useEffect(()=>{

    // API call
    const fetchUser = async()=>{
      try{
        const res = await axios.get(BASE_URL + "/account",{withCredentials:true});

        // dispatching an action 
        dispatch(addUser(res?.data?.data));

      } catch(err){
        console.error(err.message);
      }
    }
      if(!user){
        fetchUser();
      }
  },[user, dispatch])


  return (
    <div>
        <TopInforBar/>
        <NavBar/>
        <Outlet/>
        <Footer/> 
        
    </div>
  )
}

export default Body;