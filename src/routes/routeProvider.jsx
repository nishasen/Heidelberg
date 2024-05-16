import React from 'react';
import { Route, Routes } from 'react-router';
import { HomePage, Reseach, Study, Transfer } from '../modules';

const RouteProvider = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/university" element={<HomePage />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/study" element={<Study />} />
        <Route path="/reserch" element={<Reseach />} />
    </Routes>
  )
};

export default RouteProvider;