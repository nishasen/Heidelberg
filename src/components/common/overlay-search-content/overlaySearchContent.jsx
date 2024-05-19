import React from 'react';
import './_overlaySearchContent.scss';
import Button from '../button/button';
import { Link } from 'react-router-dom';

const OverlaySearchContent = () => {
  return (
    <div className='overlay-search-content'>
      <div className='search-container'>
        <input type="text" placeholder='Search...' className='input'/>
        <Button title="Search" background='pink' arrowPresent={false} />
      </div>
      <Link className='link' onClick={ (event) => event.preventDefault() }>
        Using search transmits data to Google. See the privacy policy for more information
      </Link>
    </div>
  )
}

export default OverlaySearchContent;