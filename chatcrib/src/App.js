import React from 'react';
import "./App.css";

import SignUp from './sign-up/sign-up'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>CHATSCRUM</h1>
        <SignUp/>
      </div>
    )
  }
}
export default App;