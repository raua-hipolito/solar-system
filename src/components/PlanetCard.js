import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SolarSystem.css';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div>
      <p>{planetName}</p>
      <img
        className="planetImage"
        src={ planetImage }
        alt={ `Planeta ${planetName}` }
      />

    </div>
  );
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
