import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Mission.css';

function Missions() {
  return (
    <div className="missao">
      <h2 className="h2">Missões</h2>
      {missions.map((mission) => (
        <MissionCard
          key={ mission.name }
          name={ mission.name }
          year={ mission.year }
          country={ mission.country }
          destination={ mission.destination }
        />
      ))}
    </div>
  );
}

export default Missions;
