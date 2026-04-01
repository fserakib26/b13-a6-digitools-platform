import React from 'react'

const Stats = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-[#4f39f6] to-[#9514fa] p-10  text-neutral-200'>
        <div className='flex justify-around max-w-7xl mx-auto'>
            <div className=''>
                <h2 className='text-7xl text-white'>50K+</h2>
                <p className='text-3xl'>Active Users</p>
            </div>
            <div> 
                <h2 className='text-7xl  text-white'>200K+</h2>
                <p className='text-3xl'>Premium Tools</p>
            </div>
            <div>
                <h2 className='text-7xl  text-white'>4.9</h2>
                <p className='text-3xl'>Rating</p>
            </div>
        
        </div>        
    </div>
    <div className='text-center mt-10 space-y-4 p-10'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
    </div>
    </>
  )
}

export default Stats