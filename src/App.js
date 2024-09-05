
import './App.css';
import React, { useState } from 'react';
import UserAvailability from './component/Availability/Availabity';
import AdminScheduling from './component/Schedule/Schedule';

function App() {
  const [usersAvailability, setUsersAvailability] = useState({});

  const handleUserAvailabilityUpdate = (email, newAvailability) => {
    setUsersAvailability(prev => ({
      ...prev,
      [email]: newAvailability
    }));
  };

  return (
    <div className="App">
      <h1>Availability Scheduler</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '45%' }}>
          <h2 >User View</h2>
          <UserAvailability onUpdate={handleUserAvailabilityUpdate} />
        </div>

        <div style={{ width: '45%' }}>
          <h2 >Admin View</h2>
          <AdminScheduling usersAvailability={usersAvailability} />
        </div>
      </div>
    </div>
  );
}

export default App;
