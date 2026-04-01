import React from 'react'

const FooterTop = () => {
  return (
    <div className='p-5 lg:p-30 bg-[#4f39f6] text-center text-white space-y-4'>
        <h2 className='font-bold text-4xl'>Ready to Transform Your Workflow?</h2>
        <p>Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today. </p>
        
        <div className='flex-col justify-center items-center gap-7 lg:flex-row flex font-bold text-xl space-x-3'>
            <button className='cursor-pointer rounded-full w-50 text-[#4f39f6] bg-white p-2 hover:{text-white bg-transparent outline outline-white}'>Explore Products</button>
            <button className='cursor-pointer rounded-full w-50 text-white bg-transparent outline outline-white p-2'>Explore Products</button>
        </div>

        <div>14-day free trial • No credit card required • Cancel anytime</div>

    </div>
  )
}

export default FooterTop