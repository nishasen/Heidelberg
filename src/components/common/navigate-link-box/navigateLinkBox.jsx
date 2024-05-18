import React from 'react'
import PropTypes from 'prop-types';
import { BsArrowRight } from 'react-icons/bs';
import { colors } from '../../../constants/colors';
import './_navigateLinkBox.scss';

const NavigateLinkBox = props => {
    const { navigateToTitle, id, handleLearnMore } = props;

  return (
          <div id={id} className='navigation-link-box' onClick={handleLearnMore}>
            {navigateToTitle}
            <div className='learn-more-box'>
              <span className='learn-more-title'>Learn More</span>
              <BsArrowRight size={25} color={colors.$color_navigate_button_pink} />
            </div>   
          </div> 
  )
}

NavigateLinkBox.propTypes = {
  navigateToTitle: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default NavigateLinkBox;