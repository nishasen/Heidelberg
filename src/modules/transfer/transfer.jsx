import React from 'react';
import { FacilityContainer, MainBanner } from '../../components/core';
import { BannerTitle } from '../../components/common';
import TransferBanner from '../../assets/images/transfer.jpg';
import { facilities } from '../../constants/facilities';

const Transfer = () => {
  return (
    <div>
      <MainBanner banner={TransferBanner}>
        <BannerTitle title="Transfer" />
      </MainBanner>
      <FacilityContainer facilities={facilities.transfer}/>
    </div>
  )
};

export default Transfer;