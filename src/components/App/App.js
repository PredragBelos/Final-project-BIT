import React from 'react';
import { Route } from 'react-router';
import LoginPage from '../Login page/loginPage';
import HomePage from '../Home page/homePage';
import CandidateReportPage from '../Candidate report page/candidateReportPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Route path="/home" component={HomePage}/>
      <Route path="/login" component={LoginPage}/>
      <Route path="/candidate:name" component={CandidateReportPage}/>
    </div>
  );
}

export default App;
