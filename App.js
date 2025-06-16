import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import MyEvents from './pages/MyEvents';
import './App.css';

function App() {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={<Register onRegister={setRegisteredEvents} registeredEvents={registeredEvents} />}
          />
          <Route path="/myevents" element={<MyEvents registeredEvents={registeredEvents} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
