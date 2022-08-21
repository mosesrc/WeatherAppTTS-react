import React from "react";
import "./NewAccountForm.css";

// 📝: ICONS
import { ReactComponent as UserIcon } from "../../assets/svg/form_icons/user-icon.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/form_icons/mail-open-line.svg";
import { ReactComponent as PasswordIcon } from "../../assets/svg/form_icons/lock-password-line.svg";
import { ReactComponent as EyeClosedIcon } from "../../assets/svg/form_icons/eye-off-line.svg";
import { ReactComponent as EyeOpenIcon } from "../../assets/svg/form_icons/eye-open.svg";
import { ReactComponent as GoogleIcon } from "../../assets/svg/form_icons/google-fill.svg";
import { ReactComponent as FacebookIcon } from "../../assets/svg/form_icons/facebook-fill.svg";

function NewAccountForm() {
  return (
    <div className='container rounded-4 w-50 account-form'>
      <form>
        <div className='row'>
          <div className='block-one col-6 p-4'>
            <h3>Create Account</h3>
            <p>Sign up to get started</p>
          </div>
          <div className='block-two d-flex flex-column justify-content-end col-6'>
            <p className='rotate'>
              Already have an account? &nbsp;
              <span>
                <a href='#'>Login</a>
              </span>
            </p>
          </div>
          <div className='block-three mt-2 col-6'>
            <div>
              <label htmlFor='nameInput' className='form-label'>
                Name
              </label>
              <div className='input-group mb-3'>
                <span className='input-group-text'>
                  <UserIcon />
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='nameInput'
                  placeholder='Enter First and Last Name'
                />
              </div>
              <label htmlFor='phoneInput' className='form-label'>
                Phone
              </label>
              <div className='input-group input-group-sm mb-3'>
                <select
                  className='form-select form-select-sm border-0 '
                  id='selectGroup'
                >
                  <option>2</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>

                <input
                  type='tel'
                  id='phoneInput'
                  className='form-control'
                  aria-label='Phone input with dropdown button'
                  placeholder='+234'
                />
              </div>
            </div>
          </div>
          <div className='block-four mt-2 col-6'>
            <div>
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
              <div id='emailHelp' className='mt-0 form-text'>
                We'll never share your email with anyone else.
              </div>
              <label htmlFor='exampleInputPassword1' className='form-label'>
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
          </div>
          <div className='block-five mt-4 col-6'>
            <button type='submit' className='btn btn-primary mt-4 w-100 h-50'>
              Create Account
            </button>
          </div>
          <div className='block-six mt-4 text-center col-6'>
            <h4>OR</h4>
            <p>Sign up using</p>
            <div className='row'>
              <div className='col'>
                <button className='btn btn-secondary social-btns'>
                  <div className='d-flex justify-content-center'>
                    <GoogleIcon className='me-2' />
                    <span>Google</span>
                  </div>
                </button>
              </div>
              <div className='col'>
                <button className='btn btn-secondary social-btns'>
                  <div className='d-flex justify-content-center'>
                    <FacebookIcon className='me-2' />
                    <span>Facebook</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewAccountForm;
