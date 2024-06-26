import React, { useState } from 'react';
import { FacilityContainer, MainBanner, PortalContainer, SustainabilityContainer } from '../../components/core';
import { homepageInfo } from '../../constants/homepageInfo';
import HomepageNavigator from '../../components/common/homepage-navigator/homepageNavigator';
import { facilities } from '../../constants/facilities';
import { useGlobal } from '../../context/globalContext';

const HomePage = () => {
  const { handleLearnMore } = useGlobal();
  const [selectedTab, setSelectedTab] = useState(homepageInfo[0]);
  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  }
  return (
    <div>
      <MainBanner banner={selectedTab.image}>
        <HomepageNavigator pageInfo={selectedTab} 
                           selectedItem={selectedTab} 
                           handleTabChange={handleTabChange}
                           handleLearnMore={handleLearnMore} />
      </MainBanner>
      <FacilityContainer facilities={facilities.homepage}/>
      <PortalContainer />
      <SustainabilityContainer />
    </div>
  )
};

export default HomePage;