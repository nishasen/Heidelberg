import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Navigation } from '../../common';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiSearch } from 'react-icons/bi';
import './_headerLeftWrapper.css';
import { colors } from '../../../constants/colors';

const HeaderLeftWrapper = props => {
    const { lastScrollY } = props;
  return (
    <div className='header-left-wrapper'>
        <div className='left-icon-button'>
            <IconButton><GiHamburgerMenu size={25} color={lastScrollY===0 ? colors.$color_white : colors.$color_black} /></IconButton>
            <IconButton><BiSearch size={25} color={lastScrollY===0 ? colors.$color_white : colors.$color_black} /></IconButton>
        </div>
        <Navigation lastScrollY={lastScrollY} />
    </div>
  )
}

HeaderLeftWrapper.propTypes = {
    lastScrollY: PropTypes.number,
}

export default HeaderLeftWrapper