import React, {useState} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
const RepositoryList:React.FC=()=>{

    const [term,setTerm]=useState<string>('');
   const {searchRepository} =useActions();
   const {data,error,loading}=useTypedSelector((state)=>state.repositories)  
    const submit=(event:React.FormEvent<HTMLFormElement>)=>{       
        event.preventDefault();
        searchRepository(term);
    }

    return(
        <div>
            <form onSubmit={submit}>
                <input placeholder='Enter Package Name' value={term} onChange={(e)=>{setTerm(e.target.value)}}/>
                <button>Search Package</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading &&<h3>Loading...Please Wait</h3>}
            {!error && !loading && 
                data.map((name)=>{
                    return <div key={name}>
                        {name}
                    </div>
                })
            
            }
        </div>
    )
}

export default RepositoryList;  