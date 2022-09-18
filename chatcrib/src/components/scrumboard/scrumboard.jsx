import React, { Component } from 'react'
import { details } from '../../static/login-detail'
import { Link } from 'react-router-dom';


export class Scrumboard extends Component {
    state = details
  render() {
    return (
      <div>
         <nav className='nav'>
          <h3>CHATSCRUM</h3>
          <div >
              <p>User Type: {details.userType}</p>
              <p>Project Name: {details.projectName}</p>
          </div>
      </nav>
      <h1 className='welcome'>Hello {details.fullname} Welcome to your scrumboard</h1>
      </div>
    )
  }
}

export default Scrumboard