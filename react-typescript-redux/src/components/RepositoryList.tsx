import React, {useState} from 'react';

const RepositoryList:React.FC=()=>{

    const [term,setTerm]=useState<string>('');

    const submit=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input placeholder='Enter Package Name' value={term} onChange={(e)=>{setTerm(e.target.value)}}/>
                <button>Search Package</button>
            </form>
        </div>
    )
}

export default RepositoryList;