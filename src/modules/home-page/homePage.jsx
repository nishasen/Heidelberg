import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MainBanner } from '../../components/core';
import { homepageInfo } from '../../constants/homepageInfo';
import HomepageNavigator from '../../components/common/homepage-navigator/homepageNavigator';

const HomePage = props => {
  const [selectedTab, setSelectedTab] = useState(homepageInfo[0]);
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  }
  return (
    <div>
      <MainBanner banner={selectedTab.image}>
        <HomepageNavigator pageInfo={selectedTab} selectedItem={selectedTab} handleTabChange={handleTabChange} />
      </MainBanner>
    </div>
  )
};

HomePage.propTypes = {};

export default HomePage;