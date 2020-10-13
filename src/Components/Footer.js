import React from 'react';
import { Link } from 'react-router-dom';
import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai';
import { FcAddressBook, FcPhoneAndroid, FcShop } from 'react-icons/fc';

// Main:
const Footer = () => {
  return (
    <>
      <section className='section footer-sect'>
        <div className='section-center'>
          <div className='footer-container'>
            <div className='footer-light'>
              <div className='footer-social-icons'>
                <h4>Follow us:</h4>
                <div className='social-name'>
                  <AiOutlineFacebook></AiOutlineFacebook>
                  <p>Facebook</p>
                </div>
                <div className='social-name'>
                  <AiOutlineTwitter></AiOutlineTwitter>
                  <p>Twitter</p>
                </div>
                <div className='social-name'>
                  <AiOutlineInstagram></AiOutlineInstagram>
                  <p>Instagram</p>
                </div>
                <div className='social-name'>
                  <AiOutlineYoutube></AiOutlineYoutube>
                  <p>YouTube</p>
                </div>
                <div className='social-name'>
                  <AiOutlineLinkedin></AiOutlineLinkedin>
                  <p>LinkedIn</p>
                </div>
              </div>
              <div className='legal-notices'>
                <h4>Legal Notices:</h4>
                <Link to='/' className='single-legal'>
                  Terms of Use
                </Link>
                <Link to='/' className='single-legal'>
                  Privacy Notice
                </Link>
                <Link to='/' className='single-legal'>
                  Cookies
                </Link>
              </div>
              <div className='contact-footer'>
                <div className='contact-single-footer'>
                  <FcAddressBook></FcAddressBook>
                  <p>musicstore@store.com</p>
                </div>
                <div className='contact-single-footer'>
                  <FcPhoneAndroid></FcPhoneAndroid>
                  <p>+41 111 222 33 33</p>
                </div>
                <div className='contact-single-footer'>
                  <FcShop></FcShop>
                  <p>Geneva, Switzerland.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='footer-dark-sect'>
        <div className='footer-dark'>
          <p>
            Music store <AiOutlineCopyrightCircle></AiOutlineCopyrightCircle>
            2020
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
