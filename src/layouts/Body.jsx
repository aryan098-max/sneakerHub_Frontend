import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const Body = () => {

  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/> 
        
    </div>
  )
}

export default Body;