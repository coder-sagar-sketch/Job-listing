import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ApplicantProfile = ({ jobsData }) => {
  const { jobId, applicantId } = useParams();
  const job = jobsData.find((j) => j.id === parseInt(jobId));

  if (!job) {
    return <div className="text-red-500">Job not found</div>;
  }

  const applicant = job.applicants.find((app) => app.id === parseInt(applicantId));

  if (!applicant) {
    return <div className="text-red-500">Applicant not found</div>;
  }

  return (
    <div className="container mx-auto mt-10 flex justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md">
        <h2 className="text-3xl font-bold mb-4">Applicant Profile</h2>
        <div className="mb-4">
          <p className="text-xl font-semibold mb-2">Name: {applicant.name}</p>
          <p className="text-lg mb-2">Experience: {applicant.experience}</p>
          <p className="text-lg mb-2">Skills: {applicant.skills.join(', ')}</p>
         
        </div>
        
        
        <Link
          to={`/job/${jobId}/applicants`}
          className="text-blue-500 hover:underline"
        >
          Back to Applicants
        </Link>
      </div>
    </div>
  );
};

export default ApplicantProfile;
