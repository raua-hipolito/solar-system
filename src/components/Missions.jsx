import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

function Missions() {
  return (
    <div>
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
