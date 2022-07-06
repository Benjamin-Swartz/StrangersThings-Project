import React from 'react'
import {registerNewUser} from '../api'

async function handleSubmit(event){
  event.preventDefault()

}

const Login = () => {


    return (
        <form onSubmit={handleSubmit(event)}>
            <label>Username:</label> 
            <input type='text' name='Username'/>
            <label>Password:</label>
            <input type='text' name='Password'/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Login