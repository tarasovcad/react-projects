import React from 'react';

export default function page() {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-700 rounded-xl shadow-md">
        <form action={'addGrudge'} className="space-y-4 p-4">
          <label htmlFor="grudgeName" className="block text-sm font-medium text-gray-300">
            Name of Grudge
          </label>
          <input
            type="text"
            name="grudgeName"
            id="grudgeName"
            placeholder="Enter a grudge"
            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            type="submit">
            Add Grudge
          </button>
        </form>
      </div>
    </div>
  );
}
