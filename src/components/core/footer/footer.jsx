import React from 'react';
import { footerLinks } from '../../../constants/footerLinks';
import { useGlobal } from '../../../context/globalContext';
import { useNavigate } from 'react-router';
import './_footer.scss';

const Footer = () => {
  const { lang, setLang } = useGlobal();
  const navigate = useNavigate();
  const { languages, policies, photoCredits, social, copyright } = footerLinks;

  const handleLanguage = (lang) => {
    setLang(lang);
  }

  return (
    <div className='footer-container'>
      <div className='footer-policy-wrapper'>
        <div className='languages'>
          <span>Diese Webseite auf</span>
          {languages.map(({language}) => 
            <span className={`lang ${lang===language && 'selected-lang'}`} 
                  onClick={() => handleLanguage(language)}>
              {language}
            </span>)}
        </div>
        <div className='policies'>
        {policies.map(({name, link}) => 
            <span className="policy" 
                  onClick={() => navigate(link)}>
              {name}
            </span>)}
        </div>
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