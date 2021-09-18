import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../Login page/loginPage';
import HomePage from '../Home page/homePage';
import CandidateReportPage from '../Candidate report page/candidateReportPage';
import './App.css';
import ReportPage from '../Reports page/reportPage';
import ErrorPage from '../Error page/errorPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/candidate/:name" component={CandidateReportPage} />
        <Route path="/reports" component={ReportPage} />
        <Route path="/error" component={ErrorPage} />

        <Redirect from="/" to="/login" />
      </Switch>
    </div>
  );
}

export default App;
