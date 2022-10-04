import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation';
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
  </>
);

export default App;
