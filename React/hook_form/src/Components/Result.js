import React from 'react'

const result= (props)=> {
    const firstName = props.firstName;
    const lastName = props.lastName
    const email = props.email;
    const password = props.password;
    const passconf = props.passconf;
    return (
        <div>
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {passconf}</p> 
        </div>
    )
}

export default result
