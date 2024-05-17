import React from 'react';
import PropTypes from 'prop-types';
import { MainBanner } from '../../components/core';
import UniversityBanner from '../../assets/images/university.jpg';
import { BannerTitle } from '../../components/common';

const University = props => {
  return (
    <div>
      <MainBanner banner={UniversityBanner}>
        <BannerTitle title="University" />
      </MainBanner>
    </div>
  )
};

University.propTypes = {};

export default University;