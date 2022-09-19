import React, { Component } from 'react'
import { details } from '../../static/login-detail'
import { Link } from 'react-router-dom';
import './scrumboard.css'


export class Scrumboard extends Component {
    state = details
  render() {
    return (
      <div>
         <nav className='nav bg-primary'>
          <h3>CHATSCRUM</h3>
          <div >
              <p>User Type: {details.userType}</p>
              <p>Project Name: {details.projectName}</p>
          </div>
      </nav>
      <h4>Hello {details.fullname} Welcome to your scrumboard</h4>
      <div>
        <div style={{display: "flex"}}>
        <div className='task-container'>
          <h3 className='bg-primary'>Weekly Tasks</h3>
        </div>
        <div>
        <div className='task-container'>
          <h3 className='bg-primary'>Daily Target</h3>
        </div>
        </div>
        
        </div>
        
        <button class='btn btn-primary'>ADD TASK</button>
      </div>
      </div>
    )
  }
}

export default Scrumboard