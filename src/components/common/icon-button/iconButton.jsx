import React from 'react';
import PropTypes from 'prop-types';
import './_iconButton.css';

const IconButton = props => {
    const { children } = props;
  return (
    <button className='icon-button' {...props}>{children}</button>
  )
}

IconButton.propTypes = {
    children: PropTypes.element.isRequired,
}

export default IconButton;