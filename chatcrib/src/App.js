import React from "react";
import "./App.css";
import Home from "./components/home/home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./components/sign-up/sign-up";
import SignIn from "./components/sign-in/sign-in";
import Scrumboard from "./components/scrumboard/scrumboard";
import Task from "./components/tasks/task";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/scrumboard" element={<Scrumboard/>} />
          <Route path="/tasks" element={<Task/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
