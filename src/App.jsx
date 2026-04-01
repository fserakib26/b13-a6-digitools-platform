import React, { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Stats from "./components/Stats"
import Tools from "./components/Tools"
import Cart from "./components/Cart"


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
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={()=>setActiveTab("Products")} defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart (0)" onClick={()=>setActiveTab("Cart")} />
        
      </div>

      {activeTab === "Products" && <Tools tools={tools} carts={carts} setCarts={setCarts}/>}

      {activeTab === "Cart" && <Cart carts={carts}/>}

      
    </>
  )
}

export default App
