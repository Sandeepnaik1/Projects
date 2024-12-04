import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#062C4D] text-white py-6">

      <div className="border-t border-gray-500 max-w-6xl mx-auto"></div>

      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center">

        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <h1 className="text-2xl font-bold">HABOT</h1>
          <p>© R Singhania</p>
        </div>

        <div className="w-full sm:w-auto sm:ml-11 mt-6 sm:mt-0">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-center sm:text-left">


            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">FAQ</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Terms</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">Data Privacy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Accessibility</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Related</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">Find Buyer</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Feedback</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4 sm:mt-0 sm:ml-auto">
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-xl hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="border-t border-gray-500 max-w-6xl mx-auto mt-6"></div>
    </footer>
  );
};

export default Footer;
