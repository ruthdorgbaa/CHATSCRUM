import axios from 'axios'
import React, { Component } from 'react'
import "./user.css"

export class User extends Component {
    constructor() {
        super()
            this.state = {
                User: [],
                loading: true,
                isOpen:true
    }
    
    }
    toggleModal = () => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            })
        } else {
            this.setState({
                isOpen: true
            })
        }
    }

    componentDidMount() {
        axios.get('http://liveapi.chatscrum.com/scrum/api/scrumusers/')
            .then(res => {
                this.setState({
                    User: res.data.slice(0, 8)
                })
                console.log(this.state.User, "User")
            })
    }
  render() {
    return (
        <div className="main">
            <h1  onClick={() => this.toggleModal()}>Connected User</h1>
            <div id ="user-list" className={this.state.isOpen? "show" : "hidden"}>
                {this.state.User.map(({ nickname, id }) => {
                    return (
                        <div className="user" key={id}>
                            <span className='icon'><i className="fas fa-user"></i></span>{nickname}
                        </div>
                    )
                })}
           </div>
      </div>
    )
  }
}

export default User