import React from 'react';
import { FaUser, FaPhone, FaBuilding, FaEnvelope, FaUsers } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen ">
            <div className="container mx-auto p-4">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/2 p-4 md:flex-row justify-start items-center"> 
                        <p className=" w-full text-left text-gray-600">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                            Lorem Ipsum has been the industry's standard dummy text ever since the<br/> 1500s, when an unknown printer took a galley of type.
                        </p>
                    </div>

                    {/* Right Section - Form */}
                    <div className="flex items-center justify-center min-h-screen bg-gray-50  ">
                        <div className="w-full max-w-md p-8 space-y-6 bg-white border border-blue-300 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                            <p className="text-center text-sm text-gray-500">
                                Lorem Ipsum is simply dummy text
                            </p>

                            <form className="space-y-4">
                                {/* Name Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaUser className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full p-3 pl-10 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                {/* Phone Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaPhone className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Phone no."
                                        className="w-full p-3 pl-10 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                {/* Company Name Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaBuilding className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        className="w-full p-3 pl-10 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                {/* Company Email Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaEnvelope className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Company Email"
                                        className="w-full p-3 pl-10 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                {/* Employee Size Input */}
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaUsers className="text-gray-400" size={20} />
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Employee Size"
                                        className="w-full p-3 pl-10 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <p className="text-center text-sm text-gray-500">
                                    By clicking on proceed you will accept our{' '}
                                    <Link href="#" className="text-blue-500 underline">
                                        Terms & Conditions
                                    </Link>
                                </p>

                                <button
                                    type="submit"
                                    className="w-full py-2.5 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Proceed
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
