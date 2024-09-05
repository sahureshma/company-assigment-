import React, { useState } from 'react';
import './Schedule.css';

const AdminScheduling = ({ usersAvailability }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [sessionType, setSessionType] = useState("one-on-one");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const scheduleSession = () => {
    if (selectedSlot) {
      alert(`Scheduled a ${sessionType} session for ${selectedUser} on ${selectedDay}:${selectedSlot.start} to ${selectedSlot.end}`);
    }
  };

  return (
    <div className="admin-scheduling-container">
      <h1>Admin Scheduling Interface</h1>

      <div>
        <label>Select User:</label>
        <select onChange={(e) => setSelectedUser(e.target.value)}>
          <option value="">-- Select User --</option>
          {Object.keys(usersAvailability).map((user) => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>
      </div>

      {selectedUser && (
        <>
          <h2>Availability for {selectedUser}</h2>
          <div>
            <label>Select Day:</label>
            <select onChange={(e) => setSelectedDay(e.target.value)}>
              <option value="">-- Select Day --</option>
              {Object.keys(usersAvailability[selectedUser]).map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
               <label className='ss'>Session Type:</label>
            <select 
             
              value={sessionType} 
              onChange={(e) => setSessionType(e.target.value)}
            >
              <option value="one-on-one">One-on-One</option>
              <option value="group">Group Session</option>
            </select>
            </select>
          </div>

          {selectedDay && (
            <div>
              <h3>{selectedDay}</h3>
              {usersAvailability[selectedUser][selectedDay]?.map((slot, index) => (
                <div key={index} className="availability-slot">
                  <label>
                    <input 
                      type="radio" 
                      name="slot" 
                      onChange={() => setSelectedSlot(slot)} 
                    />
                    {slot.start} - {slot.end}
                  </label>
                </div>
              ))}
            </div>
          )}

          {/* Session Type Selection */}
          <div className="session-type-container">
            <label className='ss'>Session Type:</label>
            <select 
             
              value={sessionType} 
              onChange={(e) => setSessionType(e.target.value)}
            >
              <option value="one-on-one">One-on-One</option>
              <option value="group">Group Session</option>
            </select>
          </div>

          <button onClick={scheduleSession}>Schedule Session</button>
        </>
      )}
    </div>
  );
};

export default AdminScheduling;