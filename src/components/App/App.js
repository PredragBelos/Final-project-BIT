import React from 'react';
import { Route } from 'react-router';
import LoginPage from '../Login page/loginPage';
import HomePage from '../Home page/homePage';
import CandidateReportPage from '../Candidate report page/candidateReportPage';
import './App.css';
import ReportPage from '../Reports page/reportPage';


function App() {
  return (
    <div className="App">
      <Route path="/home" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/candidate:name" component={CandidateReportPage} />
      <Route path="/reports" component={ReportPage} />
    </div>
  );
}

export default App;
