import React from 'react';
import PropTypes from 'prop-types';
import MainLogo from '../../../assets/images/mainLogo.png';
import MainLogoWhite from '../../../assets/images/mainLogoWhite.png';
import './_logo.scss';
import { Link } from 'react-router-dom';

const Logo = props => {
    const { lastScrollY, color } = props;
  return (
    <Link className={`logo ${lastScrollY===0 || color==="light" ? 'white-text' : 'black-text'}`} 
          to='/' 
          onClick={() => window.scrollTo(0, 0)}>
        <img src={lastScrollY===0 || color==="light" ? MainLogoWhite : MainLogo} 
             alt="" 
             className={`logo-img ${lastScrollY===0 || color==="light" ? 'white-border' : 'black-border'}`} />
        <div className="logo-title">
            <span className='university-name'>UNIVERSITY HEIDELBERG</span>
            <span className='university-year'>ZUKUNFT SEIT 1386</span>
        </div>
    </Link>
  )
};

Logo.propTypes = {
  lastScrollY: PropTypes.number,
  color: PropTypes.string,
};

Logo.propTypes = {
  color: "light",
};

export default Logo;