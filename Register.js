import React, { useState } from 'react';
import Button from '../components/Button';

function Register({ onRegister, registeredEvents }) {
  const [eventName, setEventName] = useState('');
  const [attendeeName, setAttendeeName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !attendeeName || !email) {
      alert('Please fill all fields');
      return;
    }
    const newEvent = { eventName, attendeeName, email };
    onRegister([...registeredEvents, newEvent]);
    alert('Event registered successfully!');
    setEventName('');
    setAttendeeName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Register for an Event</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Event Name" value={eventName} onChange={(e) => setEventName(e.target.value)} />
        <input type="text" placeholder="Your Name" value={attendeeName} onChange={(e) => setAttendeeName(e.target.value)} />
        <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button label="Register" />
      </form>
    </div>
  );
}

export default Register;
