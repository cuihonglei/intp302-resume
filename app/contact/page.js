"use client";

import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO Handle form submission
      alert("Messsage received, thank you!");

      console.log('Form submitted:', { name, email, message });

      // Clear form
      setName('');
      setEmail('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <header className="max-w-5xl bg-white w-full p-4 shadow-md flex justify-between items-center mx-auto mb-8">
        <h1 className="text-xl font-bold">Contact</h1>
        <nav className="space-x-4">
          <a href="/" className="text-blue-500 hover:underline">Home</a>
          <a href="/resume" className="text-blue-500 hover:underline">Resume</a>
          <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
        </nav>
      </header>
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border rounded mt-1 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border rounded mt-1 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full p-2 border rounded mt-1 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              rows="5"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </main>
  );
}
