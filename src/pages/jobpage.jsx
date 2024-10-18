import React, { useState } from 'react';
import InterviewModal from './interview';  // Import the modal
import Sidebar from '../component/sidebar/sidebar';

const Jobpage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-8 ml-64"> {/* Adjust for sidebar width */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={openModal}
        >
          Create Interview
        </button>

        {/* Include the modal */}
        <InterviewModal isOpen={showModal} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Jobpage;
