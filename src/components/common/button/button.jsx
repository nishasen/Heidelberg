import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';
import { colors } from '../../../constants/colors';
import './_button.scss';

const Button = props => {
    const {title, arrowcolor, background} =props;
  return (
    <button className={`button ${background} ${arrowcolor}`} {...props}>
        {title}
        <BsArrowRight color={arrowcolor==="light" ? colors.$color_white : colors.$color_navigate_button_pink} size={25} />
    </button>
  )
};

Button.propTypes = {
    title: PropTypes.string, 
    background: PropTypes.string,
    arrowcolor: PropTypes.string,
};

Button.defaultProps = {
    title: 'Button',
    background: "transparent",
    arrowcolor: 'light',
}

export default Button;