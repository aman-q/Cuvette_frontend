import React, { useState } from 'react';

const SignUpPage = () => {
  const [isVerifiedEmail, setIsVerifiedEmail] = useState(false);
  const [isVerifiedMobile, setIsVerifiedMobile] = useState(false);

  const handleEmailVerification = () => {
    
    setIsVerifiedEmail(true);
  };

  const handleMobileVerification = () => {
    
    setIsVerifiedMobile(true);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50">
      {/* Left Side */}
      <div className="md:w-1/2 p-8">
        <h1 className="text-4xl font-bold mb-2">cuvette</h1>
        <p className="text-gray-600 text-lg mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley.
        </p>
      </div>

      {/* Right Side */}
      <div className="md:w-1/3 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text</p>
        <form>
          {/* Email OTP Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email OTP</label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email OTP"
            />
          </div>
          {!isVerifiedEmail ? (
            <button
              type="button"
              onClick={handleEmailVerification}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Verify
            </button>
          ) : (
            <div className="flex items-center">
              <span className="text-green-600 text-lg mr-2">✓</span>
              <span className="text-gray-600">Email Verified</span>
            </div>
          )}

          {/* Mobile OTP Field */}
          <div className="mb-4 mt-4">
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile OTP</label>
            <input
              type="text"
              id="mobile"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Mobile OTP"
            />
          </div>
          {!isVerifiedMobile ? (
            <button
              type="button"
              onClick={handleMobileVerification}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Verify
            </button>
          ) : (
            <div className="flex items-center">
              <span className="text-green-600 text-lg mr-2">✓</span>
              <span className="text-gray-600">Mobile Verified</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
