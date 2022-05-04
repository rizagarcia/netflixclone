import React from 'react';

import Navigation from '../components/Navigation/Navigation';
import SecondaryNavigation from '../components/SecondaryNavigation/SecondaryNavigation';
import Titles from '../components/Titles/Titles';
import Footer from '../components/Footer/Footer';





function TvShow() {
  return (
    <div>
    <Navigation />
    <SecondaryNavigation/>
    <Titles/>
    <Footer/>
    </div>
  );
}

export default TvShow;