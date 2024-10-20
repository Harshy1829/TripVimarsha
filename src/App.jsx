import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard'; // Dummy component, create if needed
import MyTrips from './components/MyTrips'; // Dummy component, create if needed
import TravelPartners from './components/TravelPartners'; // Dummy component, create if needed
import CostSplit from './components/CostSplit'; // Dummy component, create if needed
import Settings from './components/Settings'; // Dummy component, create if needed

const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to Trip Vimarsha!</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mytrips" element={<MyTrips />} />
            <Route path="/travelpartners" element={<TravelPartners />} />
            <Route path="/costsplit" element={<CostSplit />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
