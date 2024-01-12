// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import ApplicantList from './components/ApplicantList';

import ApplicantProfile from './components/ApplicantProfile';
import { jobsData } from './data';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobs" element={<JobList  />} />
        <Route path="/job/:jobId" element={<JobDetails  />} />
        <Route path="/job/:jobId/applicants" element={<ApplicantList />} />

        <Route
          path="/job/:jobId/applicants/:applicantId"
          element={<ApplicantProfile jobsData={jobsData} />}
        />
       
        <Route
          path="/job/:jobId/applicants/:applicantId"
          element={<ApplicantProfile />}
        />
      </Routes>
    </Router>
  );
};

export default App;
