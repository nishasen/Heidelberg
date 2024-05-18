import React from 'react';
import PropTypes from 'prop-types';
import "./_bannerTitle.scss";

const BannerTitle = props => {
    const { title } = props;
  return (
    <div className='banner-title'>{title}</div>
  )
}

BannerTitle.propTypes = {
    title: PropTypes.string.isRequired,
}

export default BannerTitle