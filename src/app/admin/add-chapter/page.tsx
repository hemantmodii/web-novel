'use client';

import { useState } from 'react';
import AddChapterForm from './AddChapterForm';

export default function AddChapterPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD; // Replace this with your password

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg p-6 border rounded">
        {!isAuthenticated ? (
          <>
            <h1 className="text-3xl font-bold mb-6">Enter Password to Access the Admin Panel</h1>
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block" htmlFor="password">
                  Password:
                </label>
                <input
                  type="text"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
              </div>
              <button type="submit" className="p-2 rounded">
                Submit
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6">Add a New Chapter</h1>
            <AddChapterForm />
          </>
        )}
      </div>
    </div>
  );
}
