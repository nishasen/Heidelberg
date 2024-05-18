import React from 'react';
import { sustainability } from '../../../constants/sustainibility';
import { Button } from '../../common';
import './_sustainabilityContainer.scss';

const SustainabilityContainer = () => {
  return (
    <div className='sustainability-container'>
      <img src={sustainability.image} alt="" className='sustainability-image' />
      <div className='image-overlay'></div>
      <div className='sustainability-content'>
        <h1 className='sustainability-title'>{sustainability.title}</h1>
        <span className='sustainability-descp'>{sustainability.descp}</span>
        <Button title={sustainability.title} background="pink" />
      </div>
    </div>
  )
};


export default SustainabilityContainer;