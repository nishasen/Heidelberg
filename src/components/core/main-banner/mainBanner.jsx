import React from 'react';
import PropTypes from 'prop-types';
import './_mainBanner.scss';

const MainBanner = props => {
  const { banner, children } = props;
  return (
    <div className='main-banner'>
      <div className='banner-container'>
        <img src={banner} alt="" className='banner' />
      </div>
      <div className='banner-descp'>
        {children}
      </div>
    </div>
  )
};

MainBanner.propTypes = {
  banner: PropTypes.any,

};

export default MainBanner;