import React from 'react'
import '../style/Login.css';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import img from '../assets/Game4Fun.png'

const Login = () => {
  return (
    
    
    <div className='loginForm'>
      
      
      <div className='loginNav'><Navbar/></div>

        
        <div className='container'>
        <h1>Sign In</h1>

        <input type="text" placeholder="Email" />
        
        <input type="text" placeholder="Password" />
       
        <a className='forgetpw'>Forget Password?</a>
     
        <div className='submitBtn'><Button name="Submit"/></div>
        
        </div>
        
    
    </div>
  )
}

export default Login