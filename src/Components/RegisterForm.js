import React from 'react';

const RegisterForm = () => {
  return (
    <form className='login-form login'>
      <div className='form-control'>
        <div className='single-control login'>
          <label htmlFor='email' className='single-label'>
            Your Email*
          </label>
          <input
            type='email'
            placeholder='Your E-mail'
            name='email'
            className='single-input'
          />
        </div>
        <div className='single-control login'>
          <label htmlFor='username' className='single-label'>
            Your Username*
          </label>
          <input
            type='text'
            placeholder='Your Username'
            name='username'
            className='single-input'
          />
        </div>
        <div className='single-control login'>
          <label htmlFor='password' className='single-label'>
            Your Password*
          </label>
          <input
            type='password'
            placeholder='Your Password'
            name='password'
            className='single-input'
          />
        </div>
        <button className='btn-form'>Register</button>
      </div>
    </form>
  );
};

export default RegisterForm;
