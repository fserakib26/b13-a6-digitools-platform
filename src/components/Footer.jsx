import React from 'react'
import { CiFacebook } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
        <div className='bg-[#101727] text-white pt-20 pb-10'>
            <div className='lg:grid-cols-6 lg:grid flex flex-col items-center lg:items-start justify-center max-w-7xl mx-auto'>
                <div className='lg:col-span-2 lg:grid flex flex-col items-center justify-center'>
                    <h2 className='text-4xl font-bold pb-5'>DigiTools</h2>
                    <p className='text-center lg:text-left '>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div>
                    <h3 className='pb-8 font-bold text-2xl'>Product</h3>
                    <div className='flex flex-col space-y-3'>
                        <a href="">Features</a>
                        <a href="">Pricing</a>
                        <a href="">Templates</a>
                        <a href="">Integrations</a>
                    </div>
                    
                </div>
                <div>
                    <h3 className='pb-8 font-bold text-2xl'>Company</h3>
                    <div className='flex flex-col space-y-3'>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Careers</a>
                        <a href="">Press</a>
                    </div>
                    
                </div>
                <div>
                    <h3 className='pb-8 font-bold text-2xl'>Resources</h3>
                    <div className='flex flex-col space-y-3'>
                        <a href="">Documentation</a>
                        <a href="">Help Center</a>
                        <a href="">Community</a>
                        <a href="">Contact</a>
                    </div>
                    
                </div>
                <div>
                    <h3 className='pb-8 font-bold text-2xl'>Social Links</h3>
                    <div className='flex space-x-4 lg:items-start  items-center'>
                        <div className='bg-white rounded-full h-10 w-10 text-[#101727] flex justify-center items-center'>
                            <a href=""><FaInstagram/></a>
                        </div>
                        <div className='bg-white rounded-full h-10 w-10 text-[#101727] flex justify-center items-center'>
                            <a href=""><CiFacebook/></a>
                        </div>
                        <div className='bg-white rounded-full h-10 w-10 text-[#101727] flex justify-center items-center'>
                            <a href=""><FaXTwitter/> </a>
                        </div> 
                                                
                    </div>
                    
                </div> 
                
            </div>

            <div className="max-w-7xl mx-auto pt-10">
                <div className="divider before:bg-gray-500 after:bg-gray-500 text-gray-400">
            </div>

            <div className='flex-col-reverse lg:flex-row flex justify-between items-center'>
                <div>&copy; 2026 DigiTools. All rights reserved.</div>
                <div className='space-x-7'>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookies</a>
                </div>
            </div>

        </div>

        </div>
    </>
  )
}

export default Footer