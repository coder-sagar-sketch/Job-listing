import React from 'react';
import { Link } from 'react-router-dom';
import { jobsData } from '../data';

const JobList = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Job Listings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-2">
              <Link to={`/job/${job.id}`} className="text-blue-500 hover:underline">
                {job.title}
              </Link>
            </h3>
            <p className="text-gray-600">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
