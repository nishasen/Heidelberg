import React from 'react';
import { useGlobal } from '../../../context/globalContext';
import { footerLinks } from '../../../constants/footerLinks';
import './_languageContainer.scss';

const LanguageContainer = () => {
    const { lang, handleLanguage } = useGlobal();
    const { languages } = footerLinks;
  return (
    <div className='languages'>
          <span>Diese Webseite auf</span>
          {languages.map(({language}) => 
            <span className={`lang ${lang===language && 'selected-lang'}`} 
                  onClick={() => handleLanguage(language)}>
              {language}
            </span>)}
        </div>
  )
};

export default LanguageContainer;