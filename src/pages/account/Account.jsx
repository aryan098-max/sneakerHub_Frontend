import { useSelector } from "react-redux";

const Account = () => {

  // suscribing to the store
  const user = useSelector((store)=>store?.user);

  return (
    <div>
        <h1 className='text-3xl font-bold'>Hello {user?.firstName}</h1>
        <p className='py-2'>Account Overview</p>
    </div>
  )
}

export default Account