import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Header, QuickLinkContainer } from '../core';
import RouteProvider from '../../routes/routeProvider';
import './_layout.css';

const Layout = props => {
  return (
    <div className='layout'>
      <Header />
      <RouteProvider />
      <QuickLinkContainer />
      <Footer />
    </div>
  )
}

Layout.propTypes = {}

export default Layout