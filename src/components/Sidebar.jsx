import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Dealers', icon: '🏢', active: false },
    { name: 'Analytics', icon: '📈', active: false },
    { name: 'Reports', icon: '📄', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
  ];

  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-400">DealerHub</h1>
        <p className="text-gray-400 text-sm">Management System</p>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href="#"
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <div className="flex items-center space-x-3 px-4 py-2">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">JD</span>
          </div>
          <div>
            <p className="font-medium">John Doe</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
