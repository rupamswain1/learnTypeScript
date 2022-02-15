import React from 'react';

interface ChildProps{
    color:string
}

export const Child=({color}:ChildProps)=>{
    return(
        <div>
            {color}
        </div>
    )    
}

export const ChildAsFC:React.FC<ChildProps>=({color,children})=>{
    return(
        <div>
            {color}
            <div>{children}</div>
        </div>
    )
}
