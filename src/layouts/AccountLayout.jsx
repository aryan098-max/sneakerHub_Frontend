import Sidebar from "./SideBar";
import { Outlet } from "react-router";

const AccountLayout = () => {
  return(
      <div className="flex min-h-screen">
          <Sidebar />
         <div className="flex-1 p-8 bg-white">
            <Outlet/>
        </div>
    </div>
  )
}

export default AccountLayout