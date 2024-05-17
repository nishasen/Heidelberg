import React from 'react';
import PropTypes from 'prop-types';
import MainLogo from '../../../assets/images/mainLogo.png';
import './_logo.css';
import { Link } from 'react-router-dom';

const Logo = props => {
    const { lastScrollY } = props;
  return (
    <Link className={`logo ${lastScrollY===0 ? 'white-text' : 'black-text'}`} to='/'>
        <img src={MainLogo} alt="" className={`logo-img ${lastScrollY===0 ? 'white-border' : 'black-border'}`} />
        <div className="logo-title">
            <span className='university-name'>UNIVERSITY HEIDELBERG</span>
            <span className='university-year'>ZUKUNFT SEIT 1386</span>
        </div>
    </Link>
  )
};

Logo.propTypes = {};

export default Logo;