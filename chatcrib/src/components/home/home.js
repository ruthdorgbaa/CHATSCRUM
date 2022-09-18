import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
        <nav className='nav'>
          <h3>CHATSCRUM</h3>
          <ul >
              <li><Link className='none' to="/SignUp">Sign Up</Link></li>
              <li><Link className='none'  to= "/SignIn">Sign In</Link></li>
          </ul>
      </nav>
      <section className='welcome'>
        <h1>Welcome to CHATSCRUM</h1>
      </section>
    </div>
      
  )
}
