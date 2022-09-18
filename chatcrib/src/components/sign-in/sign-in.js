import React from "react";
import "./sign.in.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import content from "../../static/Revs.js";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    fullname: yup.string().required().min(5),
    email: yup.string().required("please valid mail"),
    password: yup
      .string()
      .required("please enter password")
      .matches("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"),
  })
  .required();

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="container ">
      <div className="row">
        <div className="col-4 signin-container">
          <h3>Have an Account?</h3>
          <h5>Sign In here</h5>
          <form onSubmit={handleSubmit((d) => console.log(d))}>
          {content.inputs.map((input, key) => {
              return (
                <div key={key}>
                  <label class="form-label flex" for={input.name}>
                    {input.label}
                  </label>

                  <input
                    {...register(`${input.name}`)}
                    class="form-control"
                    type={input.type}
                    name={input.name}
                  />
                  <span className="message flex">{errors[input.name]?.message && errors[input.name]?.message}</span>
                </div>
              );
            })}
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
            <Link to="/scrumboard">
              <button type="button" class="btn btn-primary flex">
                Submit
              </button>
            </Link>

            <p>
              <Link to="/">Back to Home</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
