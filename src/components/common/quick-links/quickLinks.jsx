import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './_quickLinks.scss';
import IconButton from '../icon-button/iconButton';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { colors } from '../../../constants/colors';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const QuickLinks = props => {
    const { quickLink, showTitle, overlay } = props;
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
    <div key={quickLink.id} className='quick-links'>
            <span className='title'>
              {showTitle && <span className='sub-title'>{quickLink.title}</span>}
              <span className='arrow'>
                {!overlay && quickLink.key !== 'contacts' && 
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
            {quickLink.address && 
              <div className='address'>
                {quickLink.address?.map(line => <span>{line}</span>)}
              </div>}
            {(openQuickLink[quickLink.key] || quickLink.key==='contacts') && 
            <div className='links'>
              {quickLink.links.map((link, index) => 
                <Link to={link.link} onClick={ (event) => link.link === "/" && event.preventDefault() }
                      className={`link 
                                  ${(overlay && index < 4 && quickLink.key==='mainMenu') 
                                  && 'highlight-link'}`}>
                    {link.title}
                    <span className='link-arrow'>
                        {(overlay && index < 4 && quickLink.key==='mainMenu') && 
                        <GoArrowRight size={20}/>}
                    </span>    
                </Link>)}
            </div>}
          </div>
  )
};

QuickLinks.propTypes = {
    quickLink: PropTypes.object.isRequired,
    showTitle: PropTypes.bool,
    overlay: PropTypes.bool,
};

QuickLinks.defaultProps = {
    showTitle: true,
    overlay: false
};

export default QuickLinks;