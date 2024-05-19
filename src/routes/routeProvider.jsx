import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import { HomePage, Research, Study, Transfer, University } from '../modules';

const RouteProvider = () => {
  return (
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/university" element={<University />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/study" element={<Study />} />
        <Route path="/research" element={<Research />} />
    </Routes>
  )
};

export default RouteProvider;