import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IoMdContact } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { FaLock, FaKey } from 'react-icons/fa';
import { jobsData } from '../data';

const JobDetails = () => {
  const { jobId } = useParams();
  const job = jobsData.find((j) => j.id === parseInt(jobId));

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: ""
  });
  const [detail, setDetail] = useState([]);

  const handlefield = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }

  const handleform = (e) => {
    e.preventDefault();
    const update = { ...data, id: new Date().getTime() };
    setDetail([...detail, update]);
    setData({
      name: "",
      email: "",
      password: "",
      re_password: ""
    });
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-4">{job.title}</h2>
        <p className="text-gray-600 mb-6">{job.description}</p>
        <Link
          to={`/job/${jobId}/applicants`}
          className="text-blue-500 hover:underline"
        >
          View Applicants
        </Link>
      </div>

      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Register Form</h1>

        <form className="bg-white p-6 rounded-md shadow-md max-w-md mx-auto flex flex-col items-center justify-center">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Your Name</label>
            <div className="flex items-center border-b-2 border-blue-500 py-2">
              <IoMdContact className="text-xl text-gray-500 mr-2" />
              <input
                type="text"
                name="name"
                value={data.name}
                placeholder="Your Name"
                className="w-full focus:outline-none"
                onChange={handlefield}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Your Email</label>
            <div className="flex items-center border-b-2 border-blue-500 py-2">
              <MdEmail className="text-xl text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={data.email}
                placeholder="Your Email"
                className="w-full focus:outline-none"
                onChange={handlefield}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border-b-2 border-blue-500 py-2">
              <FaLock className="text-xl text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                value={data.password}
                placeholder="Password"
                className="w-full focus:outline-none"
                onChange={handlefield}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600">Repeat Password</label>
            <div className="flex items-center border-b-2 border-blue-500 py-2">
              <FaKey className="text-xl text-gray-500 mr-2" />
              <input
                type="password"
                name="re_password"
                value={data.re_password}
                placeholder="Repeat your password"
                className="w-full focus:outline-none"
                onChange={handlefield}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            onClick={handleform}
          >
            REGISTER
          </button>
        </form>

        <div className="mt-4">
  
  <ul className="space-y-4">
    {detail.map((item) => (
      <li key={item.id} className="bg-white p-4 rounded-md shadow-md">
        <p className="text-xl font-semibold mb-2">Name: {item.name}</p>
        <p className="text-gray-600 mb-2">Email: {item.email}</p>
        <p className="text-gray-600 mb-2">Password: {item.password}</p>
        <p className="text-gray-600 mb-2">Re_Password: {item.re_password}</p>
        
        <hr className="my-2" />
      </li>
    ))}
  </ul>
</div>

      </div>
    </div>
  );
};

export default JobDetails;
