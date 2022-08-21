import React from "react";
import "./LoginForm.css";

// 📝: ICONS
import { ReactComponent as EmailIcon } from "../../assets/svg/form_icons/mail-open-line.svg";
import { ReactComponent as PasswordIcon } from "../../assets/svg/form_icons/lock-password-line.svg";
import { ReactComponent as EyeClosedIcon } from "../../assets/svg/form_icons/eye-off-line.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/form_icons/google-fill.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/form_icons/facebook-fill.svg";

function LoginForm() {
  return (
    <div className='container w-25 login-form rounded-4'>
      <div className='row d-flex flex-column'>
        <div className='col'>
          <h3>Login</h3>
          <p>Login to get started</p>
        </div>
        <div className='col'>
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
        <div className='col'>
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
        <div className='col'>
          <a href='#'>Forgot Password?</a>
        </div>
        <div className='col'>
          <button>Login</button>
        </div>
        <div className='col'>
          <a href='#'>Create Account</a>
        </div>
        <div className='col'>
          <h4>OR</h4>
        </div>
        <div className='col'>
          <p>Sign in using</p>
        </div>
        <div className='col'>
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
