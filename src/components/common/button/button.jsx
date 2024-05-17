import React from 'react';
import PropTypes from 'prop-types';
import { BiArrowFromLeft, BiArrowToRight } from 'react-icons/bi';
import './_button.css';
import { BsArrowRight } from 'react-icons/bs';
import { colors } from '../../../constants/colors';

const Button = props => {
    const {title, hiddentext, arrowcolor, background} =props;
  return (
    <button className={`button ${background} ${arrowcolor}`}>
        {!hiddentext && title}
        <BsArrowRight color={arrowcolor==="light" ? colors.$color_white : colors.$color_navigate_button_pink} size={25} />
    </button>
  )
};

Button.propTypes = {
    title: PropTypes.string, 
    hiddentext: PropTypes.bool, 
    background: PropTypes.string,
    arrowcolor: PropTypes.string,
};

Button.defaultProps = {
    title: 'Button',
    hiddentext: false,
    background: "transparent",
    arrowcolor: 'light',
}

export default Button;