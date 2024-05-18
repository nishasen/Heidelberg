import React from 'react';
import { Footer, Header, QuickLinkContainer } from '../core';
import RouteProvider from '../../routes/routeProvider';

const Layout = () => {
  return (
    <div>
      <Header />
      <RouteProvider />
      <QuickLinkContainer />
      <Footer />
    </div>
  )
};

export default Layout;