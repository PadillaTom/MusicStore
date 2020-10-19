import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();
  // Controlled Inputs:
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Submit
  const loginSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Success: Redirect.
        alert(`Logged in as: ${email}`);
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  // Main:
  return (
    <form className='login-form'>
      <div className='form-control'>
        <div className='single-control login'>
          <label htmlFor='email' className='single-label'>
            Your Email*
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Your Password'
            name='password'
            className='single-input'
          />
        </div>
        <button type='submit' onClick={loginSubmit} className='btn-form'>
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
