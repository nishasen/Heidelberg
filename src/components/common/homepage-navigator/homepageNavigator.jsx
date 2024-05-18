import React from 'react';
import PropTypes from 'prop-types';
import './_homepageNavigator.scss';
import { Button } from '../../common';
import { homepageInfo } from '../../../constants/homepageInfo';

const HomepageNavigator = props => {
    const { pageInfo, handleTabChange, selectedItem, handleLearnMore } = props;
  return (
    <div className='homepage-navigator'>
        <div className='navigator-title-wrapper'>
            <h1 className='title-wrapper'>
                <span className='navigator-title'>{pageInfo.id===1 ? `${pageInfo.title} to` : pageInfo.title}</span>
                <span className='navigator-subtitle'>{pageInfo.subTitle}</span>
            </h1>
            {pageInfo.learnMore && <Button title='Learn More' onClick={handleLearnMore} />}
        </div>
        <div className='navigator'>
            {homepageInfo.map((info) => 
                <div className={`navigator-info ${selectedItem.id===info.id && 'selected-navigator'}`} 
                     onClick={()=> handleTabChange(info)}>
                    {info.title}
                </div>)}
        </div>
    </div>
  )
};

HomepageNavigator.propTypes = {
    pageInfo: PropTypes.array.isRequired,
    handleTabChange: PropTypes.func,
    selecteditem: PropTypes.object,
    handleLearnMore: PropTypes.func
};

export default HomepageNavigator;