// JobFetchContainer.jsx
import styles from "./Fetchcontainer.module.css";
import React from "react";

const JobFetchContainer = ({ jobs }) => {
  return (
    <div class="card bg-dark text-white">
      <div class="card-body">
        <div className={styles["fetch-container"]}>
          <h2>Job Profiles:</h2>
          <div class="card bg-dark text-white">
            <div class="card-body">
              <ul>
                {jobs.map((job, index) => (
                  <li key={index}>
                    <div class="card bg-dark text-white">
                      <div class="card-body">
                        <strong>Job Type:</strong> {job.jobType} <br />
                        <strong>Job Description:</strong> {job.jobDescription}{" "}
                        <br />
                        <strong>Stipend:</strong> {job.stipend}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFetchContainer;
