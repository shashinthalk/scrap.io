import React, { useState } from "react";
import { Menu, LogOut, User } from "lucide-react"; 
import clsx from "clsx";
import FBLogin from './fb-login';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <header className="bg-white shadow flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-4">
          <button onClick={toggleSidebar}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">SCRAPPER</h1>
        </div>

        <div className="relative">
          <button
            onClick={toggleUserMenu}
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
          >
            <User className="w-5 h-5" />
          </button>
          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-md">
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <User className="w-4 h-4 mr-2" />
                Edit Profile
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </a>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={clsx(
            "bg-white shadow-md transition-all duration-300",
            isSidebarOpen ? "w-64" : "w-20"
          )}
        >
          <div className="p-4 font-bold text-lg">
            {isSidebarOpen ? "Dashboard" : "DB"}
          </div>
          <nav className="space-y-1 px-2">
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              🏠 <span className={isSidebarOpen ? "inline" : "hidden"}>Home</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              📊{" "}
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Analytics
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              ⚙️{" "}
              <span className={isSidebarOpen ? "inline" : "hidden"}>
                Settings
              </span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100 flex flex-col justify-between">
          {/* Content Area */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="text-lg font-medium">Facebook Scrapper</h3>
                <p className="text-2xl font-bold mt-2">allow access via facebook</p>
                <FBLogin></FBLogin>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="text-lg font-medium">Revenue</h3>
                <p className="text-2xl font-bold mt-2">$8,420</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow">
                <h3 className="text-lg font-medium">Orders</h3>
                <p className="text-2xl font-bold mt-2">391</p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-10 text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
