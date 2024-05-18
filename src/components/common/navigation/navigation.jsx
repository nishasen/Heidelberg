import React from 'react'
import PropTypes from 'prop-types'
import { portals } from '../../../constants/portals'
import { Link, useLocation } from 'react-router-dom';
import './_navigation.scss';

const Navigation = props => {
    const { lastScrollY } = props;
    const portal = useLocation();
    const pathname= portal.pathname.substring(1);
  return (
    <div className='navigation'>
        {portals.slice(1).map(({id, key, portalName, to}) => 
            <Link id={id}
                  className={`navigation-link 
                            ${lastScrollY===0 ? `white-nav-link ${pathname===key && 'white-selected-nav'}` : 
                                                `black-nav-link ${pathname===key && 'black-selected-nav'}`} 
                            `} 
                  key={key} 
                  to={to}>
                {portalName.toUpperCase()}
            </Link>
        )}
    </div>
  )
}

Navigation.propTypes = {
    lastScrollY: PropTypes.number,
}

export default Navigation