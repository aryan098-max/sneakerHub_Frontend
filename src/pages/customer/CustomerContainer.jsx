import { Outlet } from 'react-router'

const CustomerContainer = () => {
  return (
    <div className='min-h-screen'>
        <h1 className='font-bold text-3xl text-center py-4'>Customer Support</h1>
        <Outlet/>
    </div>
  )
}

export default CustomerContainer