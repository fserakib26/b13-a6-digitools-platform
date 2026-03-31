import React, { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Stats from "./components/Stats"
import Tools from "./components/Tools"


// const getTools = async () => {
//   const res = await fetch("/tools.json")
//   return res.json()
// }

// const toolPromise = getTools()

function App() {
   const [tools, setTools] = useState([])

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

      <Tools tools={tools}/>

      
    </>
  )
}

export default App
