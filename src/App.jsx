import React, { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Stats from "./components/Stats"
import Tools from "./components/Tools"
import Cart from "./components/Cart"
import Steps from "./components/Steps"
import PricingSection from "./components/PricingSection"
import Footer from "./components/Footer"


// const getTools = async () => {
//   const res = await fetch("/tools.json")
//   return res.json()
// }

// const toolPromise = getTools()

function App() {
   const [tools, setTools] = useState([])
   const [activeTab, setActiveTab] = useState("Products");

   const [carts, setCarts] = useState([])
  
  useEffect(() => {
    fetch("/tools.json")
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])

  return (
    <>
      <NavBar/>

      <Banner/>

      <Stats/>

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-transparent justify-center">
        <input type="radio" name="my_tabs_1" aria-label="Products" onClick={()=>setActiveTab("Products")} defaultChecked
        className={`tab rounded-full w-40 transition-all ${activeTab === "Products" ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white" : "bg-gray-200 text-black"}`}
        />

        <input type="radio" name="my_tabs_1" aria-label={`Cart (${carts.length})`} onClick={()=>setActiveTab("Cart")} 
        className={`tab rounded-full w-40 transition-all ${activeTab === "Cart" ? "bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white" : "bg-gray-200 text-black"}`}
        />
        
      </div>

      {activeTab === "Products" && <Tools tools={tools} carts={carts} setCarts={setCarts}/>}

      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts}/>}

      <Steps/>

      <PricingSection/>

      <Footer/>

      
    </>
  )
}

export default App
