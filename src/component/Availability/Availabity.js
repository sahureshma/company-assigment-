import React, { useState } from 'react';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const UserAvailability = ({ onUpdate }) => {
  const [email, setEmail] = useState("");
  const [availability, setAvailability] = useState({});
  const [day, setDay] = useState("Monday");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const addAvailabilitySlot = () => {
    if (startTime && endTime) {
      const newSlot = { start: startTime, end: endTime };
      setAvailability(prev => ({
        ...prev,
        [day]: [...(prev[day] || []), newSlot]
      }));
      setStartTime("");
      setEndTime("");
    }
  };

  const removeSlot = (day, index) => {
    setAvailability(prev => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = () => {
    onUpdate(email, availability);
    alert("Availability saved!");
  };

  return (
    <div>
      <label>Email:</label>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Enter your email" 
      />
      
      <div>
        <label>Select Day:</label>
        <select value={day} onChange={(e) => setDay(e.target.value)}>
          {daysOfWeek.map(day => (
            <option key={day} value={day}>{day}</option>
          ))}
        </select>
      </div>
      
      <div>
        <label>Start Time:</label>
        <input 
          type="time" 
          value={startTime} 
          onChange={(e) => setStartTime(e.target.value)} 
        />
      </div>

      <div>
        <label>End Time:</label>
        <input 
          type="time" 
          value={endTime} 
          onChange={(e) => setEndTime(e.target.value)} 
        />
      </div>

      <button onClick={addAvailabilitySlot}>Add Availability Slot</button>

      <h2>Availability Slots</h2>
      {daysOfWeek.map(day => (
        <div key={day}>
          <h3>{day}</h3>
          {availability[day]?.map((slot, index) => (
            <div key={index}>
              {slot.start} - {slot.end}
              <button onClick={() => removeSlot(day, index)}>Remove</button>
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleSubmit}>Submit Availability</button>
    </div>
  );
};

export default UserAvailability;