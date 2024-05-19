import React from 'react';
import { footerLinks } from '../../../constants/footerLinks';
import './_policyContainer.scss';

const PolicyContainer = () => {
    const { policies } = footerLinks;
  return (
    <div className='policies'>
        {policies.map(({name}) => 
            <span className="policy">
              {name}
            </span>
        )}
    </div>
  )
};

export default PolicyContainer;