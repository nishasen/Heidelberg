import React from 'react';
import { portals } from '../../../constants/portals';
import { Portal } from '../../common';
import './_portalContainer.scss';
import { useNavigate } from 'react-router';

const PortalContainer = () => {
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

export default PortalContainer;