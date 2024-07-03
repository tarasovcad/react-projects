import React from 'react';
import { addTodoAction } from './actions/addTodoList';
import prisma from '@/lib/prisma';
export default async function page() {
  const list = await prisma.todo.findMany({
    orderBy: {
      id: 'desc',
    },
  });
  console.log(list.id);
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-700 rounded-xl shadow-md">
        <form className="space-y-3 p-4" action={addTodoAction}>
          <label htmlFor="todo" className="block text-sm font-medium text-gray-300">
            Name of TO-DO
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter a TODO"
            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 mb-2"
          />
          <label htmlFor="todo" className="block text-sm font-medium text-gray-300">
            Name of Description
          </label>
          <input
            type="description"
            name="description"
            id="todo"
            placeholder="Enter a Description"
            className="w-full px-3 py-2 bg-gray-600 border border-gray-500 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <button
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            type="submit">
            Add TODO
          </button>
        </form>
        {list.map((item, index) => (
          <div className="mt-4 p-4">
            <div className="text-white bg-gray-600 p-2 rounded-md mt-2 shadow">
              Name: {item.title}
            </div>
            <div className="text-white bg-gray-600 p-2 rounded-md mt-2 shadow">
              Description: {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
