import React from 'react';
import PropTypes from 'prop-types';
import { MainBanner } from '../../components/core';
import { BannerTitle } from '../../components/common';
import TransferBanner from '../../assets/images/transfer.jpg';

const Transfer = props => {
  return (
    <div>
      <MainBanner banner={TransferBanner}>
        <BannerTitle title="Transfer" />
      </MainBanner>
    </div>
  )
};

Transfer.propTypes = {};

export default Transfer;