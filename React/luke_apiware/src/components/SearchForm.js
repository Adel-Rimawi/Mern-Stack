import React , { useState } from 'react'
import { navigate } from "@reach/router"

const SearchForm= ()=> {
    const [id, setId] = useState("")
    const [option, setOption] = useState("people")

    const submit=(e)=>{
        e.preventDefault()
        navigate("/api/"+option+"/"+id)
    }

    return (
        <div>
            <form >
                <label>Search for:</label>
                <select  onChange={e=>setOption(e.target.value)}>
            
            <option value="people">People</option>
            <option value="planets">Planets</option>
            <option value="starships">Starships</option>
        </select>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={submit} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchForm
