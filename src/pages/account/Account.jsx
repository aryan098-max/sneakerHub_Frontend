import { useSelector } from "react-redux";
import LoginControllerPage from "../auth/page/LoginControllerPage";


const Account = () => {

  // suscribing to the store
  const user = useSelector((store)=>store?.user);

  if (!user) return <LoginControllerPage/>

  return (
    <div>
        <h1 className='text-3xl font-bold'>Hello {user?.firstName}</h1>
        <p className='py-2'>Account Overview</p>
    </div>
  )
}

export default Account