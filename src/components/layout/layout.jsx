import React from 'react';
import { Footer, Header, QuickLinkContainer } from '../core';
import RouteProvider from '../../routes/routeProvider';
import { useGlobal } from '../../context/globalContext';
import { Overlay } from '../common';

const Layout = () => {
  const { openOverlay } = useGlobal();

  return (
      <div> 
        {!openOverlay && <>
        <Header />
        <RouteProvider />
        <QuickLinkContainer />
        <Footer />
        </> }
        <Overlay openOverlay={openOverlay} />
      </div>
  )
};

export default Layout;