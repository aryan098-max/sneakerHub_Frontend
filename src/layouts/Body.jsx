import Header from "../components/Header";
import Footer from "../components/Footer";
import TopComponent from "../components/TopComponent";
import { Outlet } from "react-router";

const Body = () => {

  return (
    <div>
        <TopComponent/>
        <Header/>
        <Outlet/>
        <Footer/> 
        
    </div>
  )
}

export default Body;