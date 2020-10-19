import React from 'react';
import LoginForm from '../Components/LoginForm';
import RegisterForm from '../Components/RegisterForm';

const LoginPage = () => {
  const [register, setRegister] = React.useState(false);

  return (
    <React.Fragment>
      <section className='section login-sect'>
        <div className='section-title'>
          <h2>My Account</h2>
        </div>
        <div className='section-center'>
          {!register ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}

          {!register ? (
            <p
              className='cta-register'
              onClick={() => {
                setRegister(!register);
              }}
            >
              Register Here
            </p>
          ) : (
            <p
              className='cta-register'
              onClick={() => {
                setRegister(!register);
              }}
            >
              Login to my Account
            </p>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default LoginPage;
