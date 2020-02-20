import React from 'react';

import './App.css';
import TopBar from "./Component/topbar"
// import RecentDonations from "./Component/RecentDonations"
import ProgressDonations from './Component/ProgressDonations';
import FormDisplay from "./Component/FormDisplay.js";
import DonorList from "./Component/DonorList.js"
// import ProgressDonations from "./Component/ProgressDonations"


function App() {
  return (
    <div className="App">
      <TopBar/>
      <ProgressDonations/>
      <FormDisplay/>
      {/* <DonorList/> */}


   </div>
  
  
  
  
  );
}


export default App;
