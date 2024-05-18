import React from 'react';
import { FacilityContainer, MainBanner } from '../../components/core';
import { BannerTitle } from '../../components/common';
import StudyBanner from '../../assets/images/study.jpg';
import { facilities } from '../../constants/facilities';

const Study = props => {
  return (
    <div>
      <MainBanner banner={StudyBanner}>
      <BannerTitle title="Study" />
      </MainBanner>
      <FacilityContainer facilities={facilities.study}/>
    </div>
  )
};

export default Study;