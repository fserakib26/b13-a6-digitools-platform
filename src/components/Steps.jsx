import React from 'react'

const Steps = () => {
  return (
    <div className='mb-20 max-w-7xl mx-auto'>
        <div className='text-center mt-30 mb-10'>
            <h2 className='text-4xl font-bold mb-5'>Get Started in 3 Steps</h2>
            <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10'>
            <div className='relative border-2 border-gray-300 shadow rounded-2xl flex flex-col justify-center items-center py-15'>
                <span className='absolute top-4 right-7 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full h-10 w-10 flex justify-center items-center text-white'>01</span>
                <div className='w-20 h-20 mb-4 rounded-full p-4 bg-[#4f39f625]'>
                    <img className='w-full h-full' src="/assets/user.png" alt="" />
                </div>
                <h2 className='font-bold text-2xl mb-4'>Create Account</h2>
                <p>Sign up for free in seconds. No credit card</p>
                <p>required to get started.</p>
            </div>

            <div className='relative border-2 border-gray-300 shadow rounded-2xl flex flex-col justify-center items-center py-15'>
                <span className='absolute top-4 right-7 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full h-10 w-10 flex justify-center items-center text-white'>02</span>
                <div className='w-20 h-20 mb-4 rounded-full p-4 bg-[#4f39f625]'>
                    <img className='w-full h-full' src="/assets/package.png" alt="" />
                </div>
                <h2 className='font-bold text-2xl mb-4'>Choose Products</h2>
                <p>Browse our catalog and select the tools</p>
                <p>that fit your needs.</p>
            </div>

            <div className='relative border-2 border-gray-300 shadow rounded-2xl flex flex-col justify-center items-center py-15'>
                <span className='absolute top-4 right-7 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full h-10 w-10 flex justify-center items-center text-white'>03</span>
                <div className='w-20 h-20 mb-4 rounded-full p-4 bg-[#4f39f625]'>
                    <img className='w-full h-full' src="/assets/rocket.png" alt="" />
                </div>
                <h2 className='font-bold text-2xl mb-4'>Start Creating</h2>
                <p>Download and start using your premium </p>
                <p>tools immediately.</p>
            </div>
            
            
        </div>
    </div>
  )
}

export default Steps