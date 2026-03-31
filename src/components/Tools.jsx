
import { useState } from "react";
import ToolsCart from "./ToolsCart";

const Tools = ({tools}) => {    

    
            
  return (     
       
    <div>

        <div className='text-center mt-10 space-y-4 p-10'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 max-w-7xl mx-auto">        

        {tools.map(tool => (
            <ToolsCart tool={tool}/>
        ))}

      </div>

    </div>
        

    
  )
}

export default Tools