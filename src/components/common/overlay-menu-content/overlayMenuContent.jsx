import React from 'react';
import './_overlayMenuContent.scss';
import { quickLinks } from '../../../constants/quickLinks';
import { LanguageContainer, PolicyContainer, QuickLinks } from '../../common';

const OverlayMenuContent = () => {
    const links = quickLinks.filter(item => item.key !== 'contacts');
    
  return (
    <div className='overlay-menu-content'>
        <h3 className='title'>Home</h3>
        <div className='quick-links-wrapper'>
            {links.map((quickLink, index) => 
                <QuickLinks quickLink={quickLink}
                            overlay={true}
                            showTitle={index===0 ? false : true}
                            />)}
        </div>
        <div className='policy-wrapper'>
            <LanguageContainer />
            <PolicyContainer />
        </div>
    </div>
  )
}

export default OverlayMenuContent