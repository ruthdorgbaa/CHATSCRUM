import React, { Component } from 'react'
import { details } from '../../static/login-detail'
import { Link } from 'react-router-dom';
import './scrumboard.css'
import Tasks from '../tasks/task'


export class Scrumboard extends Component {
  constructor(){
    super()
    this.state = {
      data: details,
      isOpen: false,
      task: null
    }
  }
  openModal = () => {
    this.setState({
      isOpen: true,
    })
  };
   closeModal = () => {
    this.setState({
      isOpen: false,
    })
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      isOpen: false
    })
  }
  
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
                <p>{this.state.task}</p>
                <Tasks/>
            </div>
            <button onClick={() => this.openModal()} class='btn btn-primary'>ADD TASK</button>
            </div>
            
            <div className='task-container'>
              <div className='task-content'>
                <h3 className='bg-primary'>Daily Target</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
            <div className='modal-header'>
              <h5>Add Task</h5>
              <h5 onClick={() => this.closeModal()} id="close" className='btn btn-danger'>X</h5>
            </div>
            <form action="" onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} className='form-control' type="text" />
              <button type='submit' className='btn btn-primary'>Confirm</button>
            </form>
          </div>
      </div>
    )
  }
}

export default Scrumboard