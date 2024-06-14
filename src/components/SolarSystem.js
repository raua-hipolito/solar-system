import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../styles/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div>
        <div className="planetas">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
