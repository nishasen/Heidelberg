import React from 'react';
import { FacilityContainer, MainBanner } from '../../components/core';
import { BannerTitle } from '../../components/common';
import ResearchBanner from '../../assets/images/research.jpeg';
import { facilities } from '../../constants/facilities';

const Research = () => {
  return (
    <div>
      <MainBanner banner={ResearchBanner}>
        <BannerTitle title="Research" />
      </MainBanner>
      <FacilityContainer facilities={facilities.research}/>
    </div>
  )
};

export default Research;