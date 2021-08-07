import { navigate } from '@reach/router'
import React, { useState } from 'react'
import DeleteButton from './DeleteButton';

const Authors = (props) => {
    const [authors, setAuthors] = useState(props.authors)
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    return (
        <div>
            <button onClick= { () => navigate("/new")} >Add An Author</button>
            <h3>All Authors: </h3>
            <ul>
            {authors.map((author, idx)=>{                
                return <li key={idx}>
                        <button onClick={()=>navigate("/author/"+author._id)} key={idx}> {author.name}</button>
                        <button onClick={()=>navigate("/edit/"+author._id)}>Edit</button>
                        <DeleteButton authorId={author._id} successCallback={()=> removeFromDom(author._id)}/>
                    </li>
            })}
            </ul>
        </div>
    )
}

export default Authors