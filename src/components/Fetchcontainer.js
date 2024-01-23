// JobFetchContainer.jsx
import styles from "./Fetchcontainer.module.css";

import React from "react";

const JobFetchContainer = ({ jobs }) => {
  return (
    <div class="card bg-dark text-white">
      <div class="card-body">
        <div className={styles["fetch-container"]}>
          <h2>Job Profiles</h2>
          <ul>
            {jobs.map((job, index) => (
              <li key={index}>
                <strong>Job Type:</strong> {job.jobType} <br />
                <strong>Job Description:</strong> {job.jobDescription} <br />
                <strong>Stipend:</strong> {job.stipend}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobFetchContainer;
