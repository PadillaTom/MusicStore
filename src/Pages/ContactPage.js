import React from 'react';

const ContactPage = () => {
  return (
    <section className='section contact-sect'>
      <div className='section-title'>
        <h2>Contact Us</h2>
      </div>
      <div className='section-center'>
        <div className='contact-subtitle'>
          <p>
            Music Store also applies the same quality standards when it comes to
            the customer service, please contact us!
          </p>
        </div>
        <form className='contact-form'>
          <div className='form-control'>
            <div className='single-control'>
              <label htmlFor='name' className='single-label'>
                Name
              </label>
              <input
                type='text'
                placeholder='Your Name'
                name='name'
                className='single-input'
              />
            </div>
            <div className='single-control'>
              <label htmlFor='email' className='single-label'>
                Email
              </label>
              <input
                type='text'
                placeholder='Your E-mail'
                name='email'
                className='single-input'
              />
            </div>
            <div className='single-control'>
              <label htmlFor='phone' className='single-label'>
                Phone
              </label>
              <input
                type='text'
                placeholder='Phone Number'
                name='phone'
                className='single-input'
              />
            </div>
            <div className='form-msg-control'>
              <label htmlFor='message' className='single-label'>
                Enter a Message
              </label>
              <textarea
                name='message'
                placeholder='Your Message...'
                rows='10'
                className='form-msg'
              ></textarea>
              <br />
            </div>
            <button className='btn-form'>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
