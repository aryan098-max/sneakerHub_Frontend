import {ShoppingBagIcon} from "@heroicons/react/24/solid";

const Cart = () => {
  return (
    <div className='max-w-4xl mx-auto py-8 px-6 rounded-lg min-h-screen'>
      <div className="flex flex-col items-center justify-center shadow-md bg-gray-100 p-8 min-h-screen">
        <ShoppingBagIcon className="text-white w-1/4" />
        <p className="font-bold text-2xl my-2">Your Shopping Bag is Empty</p>
      </div>
    </div>
  )
}

export default Cart;