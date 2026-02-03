import { NavLink } from "react-router";
import { UserCircleIcon,  MapPinIcon, Cog6ToothIcon, ShoppingBagIcon, HeartIcon,} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";

const Sidebar = () => {

  // suscribing to the store 
  const user = useSelector((store)=>store?.user);

  if(!user) return

  return (
    <div className="w-1/4 bg-gray-100 min-h-screen overflow-y-auto">
      <nav className="flex flex-col py-14 px-6 space-y-4">

        {/* Account Overview */}
        <NavLink
          to="/account"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded transition-colors ${
              isActive ? "bg-white border-l-4 border-blue-500" : "hover:bg-gray-200"
            }`
          }
        >
          <UserCircleIcon className="w-6 h-6 shrink-0" />
          <span className="font-semibold text-sm whitespace-nowrap">Account Overview</span>
        </NavLink>

        
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded transition-colors ${
              isActive ? "bg-white border-l-4 border-blue-500" : "hover:bg-gray-200"
            }`
          }
        >
          <HeartIcon className="w-6 h-6 shrink-0" />
          <span className="font-semibold text-sm whitespace-nowrap">Wishlist</span>
        </NavLink>

         <NavLink
          to="/account/orders"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded transition-colors ${
              isActive ? "bg-white border-l-4 border-blue-500" : "hover:bg-gray-200"
            }`
          }
        >
          <ShoppingBagIcon className="w-6 h-6 shrink-0" />
          <span className="font-semibold text-sm whitespace-nowrap">My Orders</span>
        </NavLink>

        
        <NavLink
          to="/account/addresses"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded transition-colors ${
              isActive ? "bg-white border-l-4 border-blue-500" : "hover:bg-gray-200"
            }`
          }
        >
          <MapPinIcon className="w-6 h-6 shrink-0" />
          <span className="font-semibold text-sm whitespace-nowrap">Adresses</span>
        </NavLink> 



        <NavLink
          to="/account/account-settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded transition-colors ${
              isActive ? "bg-white border-l-4 border-blue-500" : "hover:bg-gray-200"
            }`
          }
        >
          <Cog6ToothIcon className="w-6 h-6 shrink-0" />
          <span className="font-semibold text-sm whitespace-nowrap">Account Settings</span>
        </NavLink>
         
      </nav>
    </div>
  );
};

export default Sidebar;
