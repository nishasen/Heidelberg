import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './_header.css';
import { HeaderLeftWrapper, Logo } from '../../common';

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
      <div>
        <HeaderLeftWrapper lastScrollY={lastScrollY} />
      </div>
      <div><Logo lastScrollY={lastScrollY} /></div>
    </div>
  )
};

Header.propTypes = {};

export default Header;