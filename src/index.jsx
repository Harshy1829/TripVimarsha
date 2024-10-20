import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar'; // Adjust path if necessary
import Dashboard from './components/Dashboard'; // Import your Dashboard component

const App = () => {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add more routes for other components here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
