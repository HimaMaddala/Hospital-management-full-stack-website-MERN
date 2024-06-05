import React from 'react';
import Home from './Routes/Home';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Doctors from './Routes/Doctors';
import LoginDoctor from './Routes/Logindoctors';
import Doctordashboard from './Dashboard/Doctorsdashboard';
import Homecomp from './Routes/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Home /></>}/>
        <Route path="/appointment"element={<><Doctors /></>}/>
        <Route path="/doctors_login"element={<><LoginDoctor/></>}/>
        <Route path="/doctor_dashboard/:doctorId" element={<Doctordashboard />} />
        <Route path="/home" element={<Homecomp/>} />
        </Routes>
        </BrowserRouter>
  );
}
        

export default App;

