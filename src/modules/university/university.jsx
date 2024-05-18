import React from 'react';
import { FacilityContainer, MainBanner } from '../../components/core';
import UniversityBanner from '../../assets/images/university.jpg';
import { BannerTitle } from '../../components/common';
import { facilities } from '../../constants/facilities';

const University = props => {
  return (
    <div>
      <MainBanner banner={UniversityBanner}>
        <BannerTitle title="University" />
      </MainBanner>
      <FacilityContainer facilities={facilities.university}/>
    </div>
  )
};

export default University;