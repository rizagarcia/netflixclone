import './App.css';
import './normalize.css';
import React, { component }  from 'react';

import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';
import Home from './Home';

function App() {
    return (
        <div className="App">
            <Billboard />
            <Home/>
            <Navigation />
            <Titles />
            <Footer />
        </div>
    );
}

export default App;