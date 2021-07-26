import React, { useState } from  'react';
import Result from './Result'
    
const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconf, setPasswordconf] = useState(""); 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, email, password };
        console.log("Welcome", newUser);
    };
    
    return(
        <>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstname(e.target.value) } />
            </div>
            <p>
                        {
                            firstName.length === 0 ? "" :
                            firstName.length >= 2 ? "" : "First Name should be at least 2 characters"
                        }
                    </p>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastname(e.target.value) } />
                <p>
                        {
                            lastName.length === 0 ? "" :
                            lastName.length >= 2 ? "" : "Last Name should be at least 2 characters"
                        }
                    </p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                <p>
                        {
                            email.length === 0 ? "" :
                            email.length >= 5 ? "" : "The Email should be at least 5 characters"
                        }
                    </p>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value )  }/>
                <p>
                        {
                            password.length === 0 ? "" :
                            password.length >= 8 ? "" : "The Password should be at least 8 characters"
                        }
                    </p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setPasswordconf(e.target.value) } /><p>
                        {
                            passwordconf.length == 0 ? "" :
                                password === passwordconf ? "" : "Both password and confirmation should match"
                        }
                    </p>
            </div>
            <input type="submit" value="Create User" />
        </form> 
        <Result firstName={firstName} lastName={lastName}   email={email} password ={password} passconf = {passwordconf}/>
        </>
    );
};
    
export default UserForm;