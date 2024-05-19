import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Navigation } from '../../common';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import './_headerLeftWrapper.scss';
import { colors } from '../../../constants/colors';
import { useGlobal } from '../../../context/globalContext';

const HeaderLeftWrapper = props => {
    const { handleOpenOverlay } = useGlobal();
    const { lastScrollY } = props; 

  return (
    <div className='header-left-wrapper'>
        <div className='left-icon-button'>
            <IconButton onClick={() => handleOpenOverlay('menu')}>
              <GiHamburgerMenu size={25} 
                               color={lastScrollY===0 ? colors.$color_white : colors.$color_black} />
            </IconButton>
            <IconButton onClick={() => handleOpenOverlay('search')}>
              <BiSearch size={25} 
                        color={lastScrollY===0 ? colors.$color_white : colors.$color_black} />
            </IconButton>
        </div>
        <Navigation lastScrollY={lastScrollY} />
    </div>
  )
}

HeaderLeftWrapper.propTypes = {
    lastScrollY: PropTypes.number,
}

export default HeaderLeftWrapper