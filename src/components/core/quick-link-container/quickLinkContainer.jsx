import React, { useEffect, useState } from 'react';
import { IconButton, Logo } from '../../common';
import { quickLinks } from '../../../constants/quickLinks';
import { Link } from 'react-router-dom';
import './_quickLinkContainer.scss';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { colors } from '../../../constants/colors';

const QuickLinkContainer = () => {
  const [openQuickLink, setOpenQuickLink] = useState({
    mainMenu: true,
    informationFor: true, 
    quickLinks: true 
  })
  const handleOpenQuickLink = (key) => {
    setOpenQuickLink({...openQuickLink, [key]: !openQuickLink[key]})
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    width > 670 && setOpenQuickLink({
      mainMenu: true,
      informationFor: true, 
      quickLinks: true 
    });
  }, [width])

  return (
    <div className='quick-link-container'>
      <div className='quick-links-wrapper'>
        {quickLinks.map((quickLink) => 
          <div key={quickLink.id} className='quick-links'>
            <span className='title'>
              <span>{quickLink.title}</span>
              <span className='arrow'>
                {quickLink.key !== 'contacts' && 
                <IconButton onClick={()=>handleOpenQuickLink(quickLink.key)}>
                  {openQuickLink[quickLink.key] ? 
                    <BiUpArrow color={colors.$color_white} /> :
                    <BiDownArrow color={colors.$color_white} />
                  }
                </IconButton>
                }
              </span>
            </span>
            {quickLink.contact && <span className='contacts'>{quickLink.contact}</span>}
            {quickLink.address && <div className='address'>{quickLink.address?.map(line => <span>{line}</span>)}</div>}
            {openQuickLink[quickLink.key] && <div className='links'>
              {quickLink.links.map(link => <Link to={link.link} className='link'>{link.title}</Link>)}
            </div>}
          </div>
        )}
      </div>
      <div className='logo'><Logo color="light" /></div>
    </div>
  )
};

export default QuickLinkContainer;