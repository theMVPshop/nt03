<<<<<<< HEAD
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../src/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Router from './Router';
=======
import './css/App.css';
>>>>>>> origin/search-pages

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
