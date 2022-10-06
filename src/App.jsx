import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Nav, Footer } from './components';
import { Home, Destination, Crew, Technology } from './routes';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="destination" element={<Destination />} />
      <Route path="crew" element={<Crew />} />
      <Route path="technology" element={<Technology />} />
    </Routes>
    <Footer />
  </>
);

export default App;
