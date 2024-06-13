import React from 'react';
import PropTypes from 'prop-types';

function PlanetCard({ planetName, planetImage }) {
  return (
    <div>
      <p>{planetName}</p>
      <img
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
