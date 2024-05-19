import React from 'react';
import { footerLinks } from '../../../constants/footerLinks';
import './_footer.scss';
import { LanguageContainer, PolicyContainer } from '../../common';

const Footer = () => {
  const { photoCredits, social, copyright } = footerLinks;

  return (
    <div className='footer-container'>
      <div className='footer-policy-wrapper'>
        <LanguageContainer />
        <PolicyContainer />
      </div>
      <div className='footer-copyright-wrapper'>
        <div className='footer-links-and-copyrights'>
          <div className='links'>
            {social.map(({icon}) => 
              <div className="link-icons">{icon}</div>)}
            </div>
          <div className='university-copyright'>©{copyright}</div>
        </div>
        <div>
          Photo credits: {photoCredits.map((credit, index) => 
                  <span> © {credit}
                    <sup>
                      #{index+1}
                    </sup>
                    {!(index+1===photoCredits.length) && ','}
                  </span> )}
        </div>
      </div>
    </div>
  )
};

export default Footer;