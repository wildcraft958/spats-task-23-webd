// App.jsx
import React, { useState } from 'react';
import JobUploadContainer from './components/Uploadcontainer';
import JobFetchContainer from './components/Fetchcontainer';
import Navbar from './components/Navbar';
import Bottomnav from './components/Bottomnav';

const App = () => {
  const [jobs, setJobs] = useState([]);

  const handleJobUpload = (jobData) => {
    // Update the job list in the state
    setJobs([...jobs, jobData]);
  };

  return (
    <div className="app">
      <Navbar/>
      <JobUploadContainer onJobUpload={handleJobUpload} />
      <JobFetchContainer jobs={jobs} />
      <Bottomnav/>
    </div>
  );
};

export default App;
