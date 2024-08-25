

import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import AboutPage from './pages/AboutPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/items" element={<ItemPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer /> {/*  Footer is included here */}
    </Router>
  );
}

export default App;
