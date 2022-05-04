import React from 'react';

import Navigation from './components/Navigation/Navigation';
import SecondaryNavigation from './components/SecondaryNavigation/SecondaryNavigation';
import Titles from './components/Titles';
import Footer from './components/Footer';





function Movies() {
  return (
    <div>
    <Navigation />
    <SecondaryNavigation/>
    <Titles/>
    <Footer/>
    </div>
  );
}

export default Movies;