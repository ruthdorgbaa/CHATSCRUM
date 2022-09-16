import React from 'react';
import './sign-up.css';
const SignUp = () => (
    <div className='container'>
        <div className='row'>
            <div className='col-9'>
                <h1>Don't have an Account yet?</h1>
                <h3>Sign up here</h3>
                <form>
                    <div className="mb-3 row">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                </form>
            </div>
        </div>

    </div>
)
export default SignUp;