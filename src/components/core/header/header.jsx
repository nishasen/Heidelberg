import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderLeftWrapper, Logo } from '../../common';
import './_header.scss';

const Header = props => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false); 
    } else {
      setShowHeader(true);  
    }

    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);

    // cleanup function
    return () => {
       window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <div className={`header ${showHeader && 'hidden'} ${lastScrollY===0 && 'no-background'}`}>
      <HeaderLeftWrapper lastScrollY={lastScrollY} />
      <Logo lastScrollY={lastScrollY} />
    </div>
  )
};

Header.propTypes = {};

export default Header;