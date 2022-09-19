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
        <div className='task-container'>
          <div style={{ display: "flex" }}>
            <div>
            <div className='task-content'>
              <h3 className='bg-primary'>Weekly Tasks</h3>
            </div>
            <button class='btn btn-primary'>ADD TASK</button>
            </div>
            
            <div className='task-container'>
              <div className='task-content'>
                <h3 className='bg-primary'>Daily Target</h3>
              </div>
              <button class='btn btn-primary'>ADD TASK</button>
            </div>

          </div>
          <div class="modal" >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Modal title</h5>
                  <button type="button" class="btn-close"  aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <p>Modal body text goes here.</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Scrumboard