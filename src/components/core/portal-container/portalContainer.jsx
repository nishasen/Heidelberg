import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { portals } from '../../../constants/portals';
import { Portal } from '../../common';
import './_portalContainer.scss';
import { useNavigate } from 'react-router';

const PortalContainer = props => {
  const navigate = useNavigate();
  const handlePortalClick = (to) => {
    navigate(to);
    window.scrollTo(0,0);
  }

  const handlePortalLinkClick = () => {
    navigate('/');
    window.scrollTo(0,0);
  }

  return (
    <div className='portal-container'>
      {portals.slice(1).map(portal => 
          <Portal portal={portal} 
                  handlePortalClick={handlePortalClick} 
                  handlePortalLinkClick={handlePortalLinkClick} />)}
    </div>
  )
};

PortalContainer.propTypes = {};

export default PortalContainer;