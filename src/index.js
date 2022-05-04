import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Home from "./Home"
import TvShow from './components/TvShow';
import Movies from './Movies';
import NewAndPopular from './New&Popular';
import MyList from './MyList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tvshow" element={<TvShow />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/newandpopular" element={<NewAndPopular />} />
      <Route path="/Mylist" element={<MyList />} />

      
    </Routes>
  </BrowserRouter>
  </React.StrictMode>

);
reportWebVitals();





