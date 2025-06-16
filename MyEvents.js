import React from 'react';

function MyEvents({ registeredEvents }) {
  return (
    <div>
      <h2>My Registered Events</h2>
      {registeredEvents.length === 0 ? (
        <p>No events registered yet.</p>
      ) : (
        <ul className="event-list">
          {registeredEvents.map((event, index) => (
            <li key={index} className="event-card">
              <strong>{event.eventName}</strong><br />
              {event.attendeeName} ({event.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyEvents;
