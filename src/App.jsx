import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'; // Adjust the path if necessary

const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/trips" element={<MyTrips />} />
            <Route path="/partners" element={<TravelPartners />} />
            <Route path="/cost-split" element={<CostSplit />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
