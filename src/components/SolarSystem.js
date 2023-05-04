import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const PlanetsItems = planets.map((planet) => {
      console.log(planet);
      return (
        <li key={ planet.name }>
          <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
        </li>
      );
    });
    return (
      <div>

        <div data-testid="solar-system" />
        <Title headline="Planetas" />
        <ul>
          {PlanetsItems}
        </ul>
      </div>

    );
  }
}

export default SolarSystem;
