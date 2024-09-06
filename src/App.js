import React from 'react';

import DashboardLayoutBasic from './components/header';
// import Footer from './components/Footer';

import dummyData from './data/dummy_data.json'; // Ensure correct path

function App() {
  return (
    <div className="App">
      <DashboardLayoutBasic categories={dummyData.categories} />
      {/* The footer should be inside the DashboardLayoutBasic component */}
    </div>
  );
}

export default App;
