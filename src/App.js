import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import Header from './component/hedder/hedder';
import Signup from './pages/signUp1';
import Jobpage from './pages/jobpage';



function App() {
  return (
    <>
      <Header/>
      <Routes> 
      <Route path="/" element={<Signup/>} />
      <Route path="/jd" element={<Jobpage/>} />

       
      </Routes>
    </>
  );
}

export default App;
