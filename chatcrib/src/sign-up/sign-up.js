import React from "react";
import "./sign-up.css";
const SignUp = () => (
  <div className="container">
    <div className="row">
      <div className="col-9">
        <h1>Don't have an Account yet?</h1>
        <h3>Sign up here</h3>
        <form>
          <div className="mb-3 row">
            <label for="exampleFormControlInput1" class="form-label flex">
              Full Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-3 row">
            <label for="exampleFormControlInput1" class="form-label flex">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 row">
            <label for="exampleFormControlInput1" class="form-label flex">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Password"
            />
          </div>
          <div className="mb-3 row">
            <label for="exampleFormControlInput1" class="form-label flex">
              User Type
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <button type="button" class="btn btn-primary flex">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
);
export default SignUp;
