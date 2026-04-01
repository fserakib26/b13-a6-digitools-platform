
import { useState } from "react";
import ToolsCart from "./ToolsCart";

const Tools = ({tools, carts, setCarts}) => {    

  
                    
  return (     
       
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 max-w-7xl mx-auto">        

        {tools.map(tool => (
            <ToolsCart tool={tool} carts={carts} setCarts={setCarts}/>
        ))}

      </div>

    </div>
        

    
  )
}

export default Tools