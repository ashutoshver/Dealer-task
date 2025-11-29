import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Dealer Dashboard</h2>
          <p className="text-sm text-gray-500 mt-1">Manage and monitor your dealer network</p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg relative">
            <span className="text-2xl">🔔</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <span className="text-2xl">💬</span>
          </button>

          <div className="h-8 border-l border-gray-300"></div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Today:</span>
            <span className="text-sm text-gray-600">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
