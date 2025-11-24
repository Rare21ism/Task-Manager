import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Task Manager</h1>
          <p className="text-xl mb-8">Organize your tasks and boost your productivity</p>

          <div className="flex gap-4 justify-center">
            <Link
              to="/login"
              className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-500 transition"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Simple & Intuitive</h3>
            <p className="text-gray-600">Easy-to-use interface for managing your daily tasks</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure</h3>
            <p className="text-gray-600">Your data is protected with JWT authentication and encryption</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast & Reliable</h3>
            <p className="text-gray-600">Real-time updates and instant synchronization</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
