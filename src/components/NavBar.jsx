import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'

const NavBar = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar py-2">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Products</a></li>            
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>

                </ul>
                </div>
                <a className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">DigiTools</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>            
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2 sm:space-x-4">
                <a><CiShoppingCart className="text-xl sm:text-2xl cursor-pointer"/></a>
                <button className='hidden sm:inline-flex btn btn-outline btn-primary rounded-full'>Login</button>
                <a className="btn px-4 sm:px-6 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white text-sm sm:text-base">Get Started</a>
            </div>
        </div>
    </div>
  )
}

export default NavBar