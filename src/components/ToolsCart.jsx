import React, { useState } from 'react'
import { FcApproval } from "react-icons/fc"

const ToolsCart = ({tool, carts, setCarts}) => {
    // States for tools Buy Now Button
    const[isBuy, setIsBuy] = useState(false)

    const handleBuyNow = () => {
        setIsBuy(true)
        setCarts([...carts, tool])
    }

    const tagColors = {
    "best seller": "bg-[#fef3c6] text-[#bb4d00]",
    "popular": "bg-[#e1e7ff] text-blue-600",
    "new": "bg-[#dbfce7] text-[#0a883e]"    
    };
    
  return (
    <div key={tool.id} className="relative bg-white rounded-2xl shadow p-6 border-2 border-gray-300">

        {/* Tag */}
        <span
        className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full 
            ${tagColors[tool.tag] || "bg-gray-400 text-white"}
        `}
        >
            {tool.tag}
        </span>

        {/* Icon */}
        
        <div className="w-15 h-15 mb-4 rounded-full border border-gray-300 p-2">
            <img src={tool.icon} alt="" className="w-full h-full" />
        </div>

        {/* name */}
        <h2 className="text-xl font-bold mb-2">
            {tool.name}
        </h2>

        {/* description */}
        <p className="text-gray-500 text-sm mb-4">
            {tool.description}
        </p>

        {/* price */}
        <div className="text-2xl font-bold mb-4">
            ${tool.price}
            <span className="text-sm font-normal text-gray-500">
            /{tool.period === "one-time" ? "One-Time" : tool.period}
            </span>
        </div>

        {/* feature */}
        <ul className="space-y-2 mb-6">
            {tool.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
                <span className="text-green-500"><FcApproval/></span>
                {f}
            </li>
            ))}
        </ul>

        {/* button */}
        
        <button
        onClick={handleBuyNow}
        className={`w-full py-2 rounded-full font-semibold text-white flex items-center justify-center gap-2 
        ${isBuy ? "bg-green-500" : "bg-gradient-to-r from-[#4f39f6] to-[#9514fa]"}`}
        >

        {isBuy ? (
            <>
            <FcApproval /> Added to cart!
            </>
        ) : (
            "Buy Now"
        )}
        </button>

    </div>
  )
}

export default ToolsCart