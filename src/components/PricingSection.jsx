import React from 'react'
import { FaCheck } from 'react-icons/fa'

const PricingSection = () => {
  return (
    <div className='mb-20 max-w-7xl mx-auto p-10'>
        <div className='text-center mt-20 mb-10'>
            <h2 className='text-4xl font-bold mb-5'>Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div className='relative border-2 border-gray-300 shadow rounded-2xl p-5 transition-all duration-300 ease-in-out 
                hover:-translate-y-2 hover:shadow-xl'>                
                <h2 className='font-bold text-2xl mb-2'>Starter</h2>
                <p>Perfect for getting started</p>

                <p className='mt-9 mb-9'><span className='text-3xl font-bold'>$0</span>/Month</p>

                <div className='space-y-2.5'>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>Access to 10 free tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>Basic templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>Community support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>1 project per month</span>
                    </div> 
                </div>

                <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white w-full mt-32">
                Get Started Free  
                </button>                             
            </div>
            
            <div className='relative border-2 border-gray-300 shadow rounded-2xl p-5 bg-gradient-to-r from-[#4f39f6] to-[#9514fa] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl text-white'>
                <span className='absolute -top-3 left-40 text-[#bb4d00] bg-[#fef3c6] rounded-full flex justify-center items-center px-3 py-1 text-xs'>Most Popular</span>                
                <h2 className='font-bold text-2xl mb-2'>Pro</h2>
                <p>Best for professionals</p>

                <p className='mt-9 mb-9'><span className='text-3xl font-bold'>$29</span>/Month</p>

                <div className='space-y-2.5'>
                    <div className="flex items-center gap-2">
                        <FaCheck />
                        <span>Access to all premium tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck />
                        <span>Unlimited templates</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck />
                        <span>Priority support</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck />
                        <span>Unlimited projects</span>
                    </div> 
                    <div className="flex items-center gap-2">
                        <FaCheck />
                        <span>Cloud sync</span>
                    </div> 
                    <div className="flex items-center gap-2">
                        <FaCheck />
                        <span>Advanced analytics</span>
                    </div> 
                </div>

                <button className=" btn bg-blue-50 text-blue-700 rounded-full w-full mt-15">
                Contact Sales  
                </button>                             
            </div>

            <div className='relative border-2 border-gray-300 shadow rounded-2xl p-5 transition-all duration-300 ease-in-out 
                hover:-translate-y-2 hover:shadow-xl'>                
                <h2 className='font-bold text-2xl mb-2'>Starter</h2>
                <p>Perfect for getting started</p>

                <p className='mt-9 mb-9'><span className='text-3xl font-bold'>$99</span>/Month</p>

                <div className='space-y-2.5'>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>Everything in Pro</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>Team collaboration</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>Custom integrations</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>Dedicated support</span>
                    </div> 
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>SLA guarantee</span>
                    </div> 
                    <div className="flex items-center gap-2">
                        <FaCheck className="text-[#30b868]" />
                        <span>Custom branding</span>
                    </div> 
                </div>

                <button className="btn bg-gradient-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white w-full mt-15">
                Contact Sales  
                </button>                             
            </div>          
            
            
        </div>
    </div>
  )
}

export default PricingSection