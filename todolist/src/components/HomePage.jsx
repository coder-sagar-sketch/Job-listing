import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Job Portal</h1>
        <Link
          to="/jobs"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          View Jobs
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
