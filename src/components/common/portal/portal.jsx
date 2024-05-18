import React from 'react'
import PropTypes from 'prop-types'
import { BsArrowRight } from 'react-icons/bs';
import { colors } from '../../../constants/colors';
import { Button } from '../../common';
import './_portal.scss';

const Portal = props => {
    const { portal, handlePortalClick, handlePortalLinkClick } = props;
  return (
    <div className='portal-content'>
        <div className={`portal-wrapper ${portal.id%2===0 ? 'portal-wrapper-right' : 'portal-wrapper-left'}`}>
            <div className='portal-image-container'>
                <img src={portal.portalImage} alt="" className='portal-image' />
            </div>
            <div className='portal-info-container'>
                <h1 className='portal-name'>{portal.portalName}</h1>
                <span className='portal-descp'>{portal.portalDescp}</span>
                <div className='portal-nav-links'>{portal.portalLinks.map(links => 
                    <div className='links' onClick={handlePortalLinkClick}>
                        {links}
                        <BsArrowRight size={25} color={colors.$color_navigate_button_pink} />
                    </div>)}
                </div>
                <Button title={`${portal.portalName} Portal`} background="pink" onClick={()=>handlePortalClick(portal.to)}/>
            </div>
        </div>
        <div className={`portal-name-background ${portal.id%2===0 ? 'portal-background-left' : 'portal-background-right'}`}>
            {portal.portalName}
        </div>
    </div>
  )
}

Portal.propTypes = {
    portal: PropTypes.array.isRequired,
    handlePortalClick: PropTypes.func.isRequired,
}

export default Portal