import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from "./Component/topbar"
import RecentDonations from "./Component/RecentDonations"
// import ProgressDonations from "./Component/ProgressDonations"


function App() {
  return (
    <div className="App">
      <TopBar/>

      <RecentDonations/>

      {/* <ProgressDonations/> */}
    </div>

  );
}


export default App;
