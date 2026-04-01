import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import { MdBlurOn } from 'react-icons/md'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl mx-auto mt-10 mb-10 gap-10 px-4">
        <div>
            <div className='flex items-center space-x-2 text-blue-500 px-4 py-1 rounded-full bg-blue-50 shadow w-fit'>
                <a><MdBlurOn /></a>
                <a> <span className='font-bold'>New:</span> AI-Powered Tools Available</a>
            </div>
            <div className='mt-4 space-y-4'>
                <h2 className='text-5xl text-center  md:text-7xl lg:text-left font-bold'>Supercharge Your <br /> Digital Workflow</h2>
                <p className='text-center md:text-left'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br />Explore Products</p>
            </div>
            <div className='text-center md:text-left space-x-4 mt-4'>
                <button className='btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white'>Explore Products</button>
                <button className='btn bg-transparent border-blue-600 text-blue-600 rounded-full'><CiPlay1/> Watch Demo</button>
            </div>
        </div>
        <div>
            <img src="/assets/banner.png" alt="" />
        </div>
    </div>
  )
}

export default Hero