import React from 'react'

const Cart = ({carts}) => {
    console.log(carts);
  return (
    <div className='p-10 shadow-lg border-2 border-gray-200 rounded-2xl max-w-7xl mx-auto'>
      <h1 className='font-bold text-3xl'>Your Cart</h1>
        {
          carts.map(item => 
            <>
            <div key={item.id} className='flex justify-between items-center mt-5 px-10 py-2'>
              <div className='flex gap-7'>
                <div className="w-15 h-15 mb-4 rounded-full border border-gray-300 p-2">
                  <img src={item.icon} alt="" className="w-full h-full" />
                </div>
                <div>
                  <h2 className='font-bold'>{item.name}</h2>
                  <span>${item.price}</span>
                </div>
                <div>

                </div>
              </div>
              <div>
                <button className='text-red-500 bg-transparent btn'>Delete</button>
              </div>

            </div>         

            </>
            
          )
        }
      <div className='flex justify-between py-7'>
        <div className='font-bold'><span>Total</span></div>
        <div className='font-bold text-2xl'><span>$100</span></div>
      </div>

      <div>
        <button className='btn w-full rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white'>Proceed To Checkout</button>
        
      </div>

    </div>
  )
}

export default Cart