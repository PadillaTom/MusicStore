import React from 'react';

const LoginForm = () => {
  return (
    <form className='login-form'>
      <div className='form-control'>
        <div className='single-control login'>
          <label htmlFor='email' className='single-label'>
            Your Email*
          </label>
          <input
            type='text'
            placeholder='Your E-mail'
            name='email'
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
        <button className='btn-form'>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
