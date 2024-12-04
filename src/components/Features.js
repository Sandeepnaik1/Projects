import React from 'react';
import '../App.css';

function App() {
  return (
    <div className="container">
 <header className="header flex justify-between items-center px-8 py-4">
  <h1 className="text-xl font-semibold">Let Suppliers Find You</h1>
  <button className="get-verified-btn bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">
    Get Verified
  </button>
</header>


      <section className="how-it-works">
        <h2>How it works?</h2>
        <p>
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build
          successful business relationships, sharing valuable feedback.
        </p>
        <div className="steps">
          <div className="step">
            <img src="role-icon.png" alt="Select Role Icon" />
            <p>Select Your Role and Sign Up</p>
          </div>
          <div className="step">
            <img src="requirements-icon.png" alt="Post Requirements Icon" />
            <p>Buyers Post Your Requirements</p>
          </div>
          <div className="step">
            <img src="review-icon.png" alt="Review Suppliers Icon" />
            <p>Review, Select, and Contact the Best Suppliers</p>
          </div>
          <div className="step">
            <img src="profile-icon.png" alt="Supplier Profile Icon" />
            <p>Suppliers Complete your Profile and Get Notified</p>
          </div>
          <div className="step">
            <img src="contact-icon.png" alt="Contact Icon" />
            <p>Contact to Buyers and Share Feedback</p>
          </div>
          <div className="step">
            <img src="connect-icon.png" alt="Connect Icon" />
            <p>Both the Parties can Connect and Make Business</p>
          </div>
        </div>
      </section>
    </div>
  );
}


export default App;
