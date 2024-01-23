// JobUploadContainer.jsx

import React, { useState } from "react";
import styles from "./Uploadconatiner.module.css";
const JobUploadContainer = ({ onJobUpload }) => {
  const [jobType, setJobType] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [stipend, setStipend] = useState("");

  const handleUpload = () => {
    const jobData = {
      jobType,
      jobDescription,
      stipend: stipend || "No stipend",
    };

    // Pass the job data to the parent component
    onJobUpload(jobData);

    // Clear the form after uploading
    setJobType("");
    setJobDescription("");
    setStipend("");
  };

  return (
    <>
      <div className="upload-container">
        <label>Job Type:</label>
        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="">Select</option>
          <option value="internship">Internship</option>
          <option value="job">Job</option>
          <option value="contract">Contract</option>
        </select>
      </div>
      <div className={styles["job-type"]}>
        <label>Job Description :</label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          style={{backgroundColor:"#89929b", color:"white"}}
        />
      </div>
      <label>Stipend:</label>
      <input
        type="text"
        value={stipend}
        onChange={(e) => setStipend(e.target.value)}
      />

      <button onClick={handleUpload}>Upload</button>
    </>
  );
};

export default JobUploadContainer;
