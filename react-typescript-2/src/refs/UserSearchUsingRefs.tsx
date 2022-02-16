import React,{useState,useRef,useEffect} from 'react';

type guestList={
    id:number,
    uname:string
}

const UserSearchUsingRefs:React.FC=()=>{

    const[searchName,setSearchName]=useState<string>('');
    const [foundName,setFoundName]=useState<guestList[]>([])
    const inputRef=useRef<HTMLInputElement|null>(null);

    useEffect(()=>{
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus();
    },[])
    const users:guestList[]=[
        {id:1,uname:'Alexa'},
        {id:2,uname:'cortana'},
        {id:3,uname:'Siri'}
    ];

    const searchUser=()=>{
        setFoundName(users.filter((user:guestList)=>{
            return user.uname.toLowerCase().includes(searchName.toLowerCase());
        }))
        
    }
   
    
    return(
        <div>
            <h3>User Search Using Refs</h3>
            <div>
                <input ref={inputRef} placeholder='search User' onChange={(e)=>setSearchName(e.target.value)}/>
            </div>
            <div>
                <button onClick={searchUser}>Search</button>
            </div>
            <br></br>
            <div>Results: </div>
            <div>{`${foundName.length} results found`}</div>
            <div>
                <ul>
                    {foundName.map((user:guestList)=>{
                        return <li>{user.uname}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default UserSearchUsingRefs;