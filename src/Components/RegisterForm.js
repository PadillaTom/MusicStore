import React, { useState } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
  const history = useHistory();
  // Controlled Inputs:
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  // Submit:
  const registerSubmit = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Create User, login, redirect.
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Your Password'
            name='password'
            className='single-input'
          />
        </div>
        <button type='submit' className='btn-form' onClick={registerSubmit}>
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
