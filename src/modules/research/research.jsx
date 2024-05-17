import React from 'react';
import PropTypes from 'prop-types';
import { MainBanner } from '../../components/core';
import { BannerTitle } from '../../components/common';
import ResearchBanner from '../../assets/images/research.jpeg';

const Research = props => {
  return (
    <div>
      <MainBanner banner={ResearchBanner}>
        <BannerTitle title="Research" />
      </MainBanner>
    </div>
  )
};

Research.propTypes = {};

export default Research;