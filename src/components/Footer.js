import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fa fa-facebook' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
            >
              <i className='fa fa-instagram' />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
            >
              <i className='fa fa-youtube' />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
            >
              <i className='fa fa-twitter' />
            </Link>
          </div>
          <div className='footer-logo'>
            <h3 className='social-logo'>
             ©DYNOMITE-GYMS
            </h3>
          </div>
    </div>
  );
}

export default Footer;