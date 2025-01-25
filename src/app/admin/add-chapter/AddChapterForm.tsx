'use client';

import { useState } from 'react';

export default function AddChapterForm() {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/chapters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        content,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('Chapter added successfully');
    } else {
      alert('Error: ' + data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block" htmlFor="name">
          Chapter Title:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block" htmlFor="content">
          Chapter Content:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={10}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className= "p-2 rounded">
        Add Chapter
      </button>
    </form>
  );
}
