import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Home from './routes/Home';
import Destination from './routes/Destination';
import Crew from './routes/Crew';
import Technology from './routes/Technology';

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
