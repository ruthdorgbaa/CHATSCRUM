import React, { Component } from 'react'

export class AddTask extends Component {
    state = {
       content: "" 
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
          content: e.target.value
        })
          this.props.addTask(this.state)
      }
  render() {
    return (
        <div className= "add-task">
            content:"<div id="modal" className={this.state.isOpen ? "show" : "hidden"}>
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

export default AddTask