import React, { Component } from 'react'
import { details } from '../../static/login-detail'
import { Link } from 'react-router-dom';
import './scrumboard.css'
import { reorder, move} from '../tasks/task'
import Tasks from '../tasks/task'
import { DragDropContext } from 'react-beautiful-dnd';
import { tasklist } from '../../static/task';


export class Scrumboard extends Component {
  constructor(){
    super()
    this.state = {
      data: details,
      isOpen: false,
      task: tasklist,
      doneList: []
      
    }
  }

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
        return;
    }

    if (source.droppableId === destination.droppableId) {
        const items = reorder(
            this.state.task,
            source.index,
            destination.index
        );

        let state = { items };

        if (source.droppableId === 'droppable2') {
            state = { selected: items };
        }

        this.setState(state);
    } else {
        const result = move(
            this.state.task,
            this.state.doneList,
            source,
            destination
        );

        this.setState({
            items: result.droppable,
            selected: result.droppable2
        });
    }
};
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
      <DragDropContext onDragEnd={this.onDragEnd}>
        <nav className='nav bg-primary'>
          <h3>CHATSCRUM</h3>
          <div >
            <p>User Type: {details.userType}</p>
            <p>Project Name: {details.projectName}</p>
          </div>
        </nav>
        <h4>Hello {details.fullname} Welcome to your scrumboard</h4>
        <div className='task-container'>
          <Tasks list={this.state.task} selected={this.state.doneList}/>
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
      </DragDropContext>
    )
  }
}

export default Scrumboard