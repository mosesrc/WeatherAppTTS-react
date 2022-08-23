import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

// 📝: ICONS
import { ReactComponent as EmailIcon } from "../../assets/svg/form_icons/mail-open-line.svg";
import { ReactComponent as PasswordIcon } from "../../assets/svg/form_icons/lock-password-line.svg";
import { ReactComponent as EyeClosedIcon } from "../../assets/svg/form_icons/eye-off-line.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/form_icons/google-fill.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/form_icons/facebook-fill.svg";

function LoginForm() {
  return (
    <div className='container w-25 mt-5 mb-5 login-form rounded-4'>
      <div className='row d-flex flex-column'>
        <div className='col mb-4'>
          <h3>Login</h3>
          <p>Login to get started</p>
        </div>
        <div className='col mb-4 text-white'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Email address
          </label>
          <div className='input-group'>
            <span className='input-group-text'>
              <EmailIcon />
            </span>
            <input
              type='email'
              className='mb-0 form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter Email'
            />
          </div>
        </div>
        <div className='col text-white'>
          <label htmlFor='passwordInput' className='form-label'>
            Password
          </label>
          <div className='input-group mb-3'>
            <span className='input-group-text'>
              <PasswordIcon />
            </span>
            <input
              type='password'
              className='form-control'
              id='passwordInput'
              placeholder='Enter Password'
            />
            <button className='btn btn-light'>
              <EyeClosedIcon />
            </button>
          </div>
        </div>
        <div className='col text-end'>
          <a href='#'>Forgot Password?</a>
        </div>
        <div className='col d-flex justify-content-center login-div'>
          <button type='button' className='btn' id='loginBtn'>
            Login
          </button>
        </div>
        <div className='col text-center'>
          <Link to='/create_account' className='link-light'>
            Create Account
          </Link>
        </div>
        <div className='col mt-4 text-center'>
          <h4>OR</h4>
        </div>
        <div className='col text-center'>
          <p>Sign in using</p>
        </div>
        <div className='col d-flex justify-content-around'>
          <button className='btn btn-secondary social-btns'>
            <div className='d-flex justify-content-center'>
              <GoogleIcon className='me-2' />
              <span>Google</span>
            </div>
          </button>
          <button className='btn btn-secondary social-btns'>
            <div className='d-flex justify-content-center'>
              <FacebookIcon className='me-2' />
              <span>Facebook</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
