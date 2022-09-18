import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
      <div className='links'>
          <h1>WELCOME TO CHATSCRUM</h1>
          <div>
              <h4><Link to="/SignUp">SIGN UP</Link></h4>
              <h4><Link to= "/SignIn">SIGN IN</Link></h4>
          </div>
      </div>
  )
}
