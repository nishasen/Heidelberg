import React from 'react';
import PropTypes from 'prop-types';
import { MainBanner } from '../../components/core';
import { BannerTitle } from '../../components/common';
import StudyBanner from '../../assets/images/study.jpg';

const Study = props => {
  return (
    <div>
      <MainBanner banner={StudyBanner}>
      <BannerTitle title="Study" />
      </MainBanner>
    </div>
  )
};

Study.propTypes = {};

export default Study;