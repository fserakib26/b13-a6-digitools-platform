import React from 'react'

const Stats = () => {
  return (
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
  )
}

export default Stats