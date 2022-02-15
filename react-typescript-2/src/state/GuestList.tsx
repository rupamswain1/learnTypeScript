import React,{useState} from 'react';

export const GuestList:React.FC=()=>{

    const [name,setName]=useState('');
    const [guests,setGuest]=useState<string[]>([]);

    const addGuests=():void=>{
        setGuest([...guests,name]);
        setName('');
    }

    return(
        <div>
            <h3>Guest List:</h3>
            <ul>
                {
                    guests.map((guest)=>{
                        return <li>{guest}</li>
                    })
                }
            </ul>
            <div>
                <div>
                    <input placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                    <button onClick={addGuests}>Add Button</button>
                </div>
            </div>
        </div>
    );
}