import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard'; // Placeholder component
import MyTrips from './components/MyTrips'; // Placeholder component
import TravelPartners from './components/TravelPartners'; // Placeholder component
import CostSplit from './components/CostSplit'; // Placeholder component
import Settings from './components/Settings'; // Placeholder component

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/trips" element={<MyTrips />} />
          <Route path="/partners" element={<TravelPartners />} />
          <Route path="/cost-split" element={<CostSplit />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
