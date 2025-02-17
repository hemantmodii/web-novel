'use client';

import { useState } from 'react';
import AddChapterForm from './AddChapterForm';
import {FiEye, FiEyeOff} from "react-icons/fi";

export default function AddChapterPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = process.env.ADMIN_PASSWORD; // Replace this with your password
  const [viewPass, setViewPass]= useState("password");

  

  const handlePasswordSubmit = (e) => {
    console.log("hello");
    e.preventDefault();

    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className={`p-6 border rounded mx-20`}>

      {isAuthenticated ? (
  <div className="w-[800px]">  {/* Increased width */}
    <h1 className="text-3xl font-bold mb-6">Add a New Chapter</h1>
    <AddChapterForm />
  </div>
) : (
  <div className="justify-center flex flex-col align-middle mx-auto">
    <h1 className="text-3xl font-bold mb-6">Enter Password to Access the Admin Panel</h1>
    <form onSubmit={handlePasswordSubmit} className="space-y-4">
      <div>
        <label className="block" htmlFor="password">
          Password:
        </label>
        <div id="password" className="relative">
          <input
            type={viewPass}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded text-black"
          />
          {viewPass === "password" ? (
            <FiEye
              color="black"
              className="scale-150 right-4 top-4 absolute cursor-pointer"
              onClick={() => setViewPass("text")}
            />
          ) : (
            <FiEyeOff
              color="black"
              className="scale-150 right-4 top-4 absolute cursor-pointer"
              onClick={() => setViewPass("password")}
            />
          )}
        </div>
      </div>
      <button type="submit" className="p-2 rounded">
        Submit
      </button>
    </form>
  </div>
)}

      </div>
    </div>
  );
}
