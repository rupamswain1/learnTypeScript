import React from 'react';

export const EventComponent:React.FC=()=>{

    const onClickEvent=(event:React.ChangeEvent<HTMLDivElement>)=>{
        console.log(event); 
    }

    const onDragEvent=(event:React.DragEvent<HTMLSpanElement>)=>{
        console.log(event);
        
        console.log('I am Being Dragged');
        
    }
    return(
        <div>
            <h3>Input Event Example:</h3>
            <div>
                <input placeholder='type here and see console' onChange={onClickEvent}/>
            </div>
            <div>
                <span draggable onDragStart={onDragEvent}>Drag Me and See console</span>
            </div>
        </div>
    )
}