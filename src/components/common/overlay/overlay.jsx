import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './_overlay.scss';
import { CgClose } from 'react-icons/cg';
import { colors } from '../../../constants/colors';
import { useGlobal } from '../../../context/globalContext';
import { Logo, OverlayMenuContent, OverlaySearchContent } from '../../common';
import { useSearchParams } from 'react-router-dom';

const Overlay = props => {
  const { handleCloseOverlay } = useGlobal();
  const [param]=useSearchParams();
  const [title, setTitle] = useState('');
  const { background, openOverlay } = props;
  useEffect(() => {
    const title = param.get("overlay");
    setTitle(title !== 'menu' ? title : '')
  }, [param])
  return (
    <div className={`overlay-wrapper ${openOverlay && 'show-overlay'}`}>
      <div className={`content-container ${background}-background`}>
        <div className='logo-wrapper'>
          <span className='close-icon' onClick={handleCloseOverlay}>
            <CgClose size={30} color={colors.$color_white} />
          </span>
          <Logo color="light" />
        </div>
        <div className='title-wrapper'>{title}</div>
        <div className={`content-wrapper ${title==='' && 'move-content-wrapper'}`}>
        {param.get("overlay")==='search' ? <OverlaySearchContent /> : <OverlayMenuContent />}
        </div>
      </div>
      <div className={`close-overlay-wrapper ${background}-close-background`}>
        <span className='close-icon' onClick={handleCloseOverlay}>
          <CgClose size={30} color={colors.$color_white} />
        </span>
        <span className='close-text' onClick={handleCloseOverlay}>C l o s e</span>
      </div>
    </div>
  )
};

Overlay.propTypes = {
  background: PropTypes.string,
  openOverlay: PropTypes.bool.isRequired,
};

Overlay.defaultProps = {
  background: 'dark',
}

export default Overlay;