import React from 'react'
import { Route, Routes } from 'react-router-dom';
import pages from '../components/DataMaps/pageData';

const Routing = () => {
    
  return (
    <Routes>
        {pages.map((pageNav) => (
            <Route path={pageNav.path} element={pageNav.pageTo}></Route>
        ))}
    </Routes>
  )
}

export default Routing;