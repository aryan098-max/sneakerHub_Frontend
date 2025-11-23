import { Outlet } from "react-router";

const PolicyContainer = () => {
  return (
    <div className="min-h-screen">
      <h1 className='text-center text-3xl font-bold py-4'> Our Policies</h1>
      <Outlet/>
    </div>
  )
}

export default PolicyContainer;