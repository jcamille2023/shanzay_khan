import React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Route path="/" Component={Home} />
    </Router>
  );
}

export default App;
