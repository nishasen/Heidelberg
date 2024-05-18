import React from 'react';
import PropTypes from 'prop-types';
import { NavigateLinkBox } from '../../common';
import { useGlobal } from '../../../context/globalContext';
import "./_facilityContainer.scss";

const FacilityContainer = props => {
  const { facilities } = props;
  const { handleLearnMore } = useGlobal();
  return (
    <div className='facility-container'>
      {facilities.map((facility, index) =>
        <div className='navigation-hor-divider'>
          <hr className='horizontal-divider'/>
          <div className='navigation-ver-divider'>
            <NavigateLinkBox navigateToTitle={facility} 
                             id={index} 
                             key={index} 
                             handleLearnMore={handleLearnMore}/>
            <hr className='vertical-divider'/>
          </div> 
        </div> 
      )}    
    </div>
  )
};

FacilityContainer.propTypes = {
  facilities: PropTypes.array.isRequired,
};

export default FacilityContainer;