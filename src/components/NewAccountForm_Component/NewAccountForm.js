import React from "react";
import "./NewAccountForm.css";

function NewAccountForm() {
  return (
    <div className='container rounded-4 w-50 account-form'>
      <form>
        <div className='row'>
          <div className='block-one col-6 p-4'>
            <h3>Create Account</h3>
            <p>Sign up to get started</p>
          </div>
          <div className='block-two col-6'>
            <p>
              Already have an account?
              <span>
                <a href='#'>Login</a>
              </span>
            </p>
          </div>
          <div className='col-6'>Hello</div>
          <div className='col-6'>Hey, There</div>
          <div className='col-6'>Hello</div>
          <div className='col-6'>Hey, There</div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewAccountForm;
