import React from 'react';
import "./App.css";
import Home from './components/home/home.js'
import {BrowserRouter, Route} from 'react-router-dom'

import SignUp from './components/sign-up/sign-up'
import SignIn from './components/sign-in/sign-in'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
        <Route exact path='/' component={Home}/>
          <Route path='/SignUp' component={SignUp}/>
          <Route path='/SignIn' component={SignIn}/>
      </div>
      </BrowserRouter>
      
    )
  }
}
export default App;