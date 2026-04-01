import React from 'react'

const Cart = ({carts, setCarts}) => {

  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)

  // Checkout Function
  const hangleCheckout = () =>{
    setCarts([])
  }

  // Delete Function
  const handleDelete = (item) => {
    const filteredArray = carts.filter(d => d.id !== item.id)
    console.log(filteredArray)
    setCarts(filteredArray)
  }


    console.log(carts);
  return (
    <div className='p-10 shadow-lg border-2 border-gray-200 rounded-2xl max-w-7xl mx-auto mt-10 mb-10'>
      <h1 className='font-bold text-3xl'>Your Cart</h1>

        {
          carts.length === 0 ? (
            
            <div className='flex flex-col justify-center items-center'>                
              <img className='w-40' src="https://i.ibb.co.com/PzfVSrmK/empty-cart.png" alt="Empty cart" />                               
              <p className='text-2xl font-bold'>Your Cart is Empty!</p>
              <p>Back to Home and select an Item's whoch you need</p>
              <p>Thank You!</p>
            </div>
            
          ) :

          <>
             <div>
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
                  <button onClick={()=> handleDelete(item)} className='text-red-500 bg-transparent btn'>Delete</button>
                </div>

              </div>         

              </>
              
            )
            }
            <div className='flex justify-between py-7'>
              <div className='font-bold'><span>Total</span></div>
              <div className='font-bold text-2xl'>${totalPrice}</div>
            </div>

            <div>
              <button onClick={hangleCheckout} className='btn w-full rounded-full bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white'>Proceed To Checkout</button>
              
            </div>

          </div>
          </>
        }
         
        

    </div>
  )
}

export default Cart