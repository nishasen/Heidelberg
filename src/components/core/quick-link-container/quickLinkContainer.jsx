import React from 'react';
import { Logo, QuickLinks } from '../../common';
import { quickLinks } from '../../../constants/quickLinks';
import './_quickLinkContainer.scss';

const QuickLinkContainer = () => {
  return (
    <div className='quick-link-container'>
      <div className='quick-links-wrapper'>
        {quickLinks.map((quickLink) => 
          <QuickLinks quickLink={quickLink} />
        )}
      </div>
      <div className='logo'><Logo color="light" /></div>
    </div>
  )
};

export default QuickLinkContainer;