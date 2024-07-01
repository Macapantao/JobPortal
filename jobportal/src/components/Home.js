import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [jobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'Google', location: 'Mountain View, CA' },
    { id: 2, title: 'Product Manager', company: 'Facebook', location: 'Menlo Park, CA' },
    // Add more jobs as needed
  ]);

  return (
    <div className="home">
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <Link to={`/job/${job.id}`}>
              <h3>{job.title}</h3>
              <p>{job.company} - {job.location}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
