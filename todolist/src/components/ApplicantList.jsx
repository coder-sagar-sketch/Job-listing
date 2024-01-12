import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobsData } from '../data';

const ApplicantList = () => {
  const { jobId } = useParams();
  const job = jobsData.find((j) => j.id === parseInt(jobId));

  if (!job) {
    return <div className="text-red-500">Job not found</div>;
  }

  const applicants = job.applicants || [];

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4">Applicants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {applicants.map((applicant) => (
          <div key={applicant.id} className="bg-white p-6 rounded-md shadow-md">
            <Link
              to={`/job/${jobId}/applicants/${applicant.id}`}
              className="text-blue-500 hover:underline text-xl font-semibold mb-2 block"
            >
              {applicant.name}
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantList;
