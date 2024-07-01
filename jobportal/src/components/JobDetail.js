import React from 'react';
import { useParams } from 'react-router-dom';
import './JobDetail.css';

const JobDetail = () => {
  const { id } = useParams();
  const job = {
    id: 1,
    title: 'Software Engineer',
    company: 'Google',
    location: 'Mountain View, CA',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    requirements: 'Experience with JavaScript, React, and Node.js.',
  };

  return (
    <div className="job-detail">
      <h2>{job.title}</h2>
      <h3>{job.company} - {job.location}</h3>
      <p>{job.description}</p>
      <h4>Requirements:</h4>
      <p>{job.requirements}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetail;
