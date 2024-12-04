import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-4xl font-bold font-serif">Habot</h1>

        {/* Navigation Section */}
        <nav className="flex items-center space-x-6 ml-auto"> 
          {/* Find Suppliers Link */}
          <a href="#find-suppliers" className="hover:underline">Find Suppliers</a>

          {/* Find Service Tags Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center hover:underline"
            >
              Find Service Tags
              <span className="ml-2 text-sm">&#9660;</span> 
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md">
                <li>
                  <a href="#service1" className="block px-4 py-2 text-black hover:bg-gray-100">Service 1</a>
                </li>
                <li>
                  <a href="#service2" className="block px-4 py-2 text-black hover:bg-gray-100">Service 2</a>
                </li>
                <li>
                  <a href="#service3" className="block px-4 py-2 text-black hover:bg-gray-100">Service 3</a>
                </li>
              </ul>
            )}
          </div>

          <button className="border-2 border-green-500 text-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-white transition duration-300">
            Login/Signup
          </button>
        </nav> 
      </div>
    </header>
  );
};

export default Header;
