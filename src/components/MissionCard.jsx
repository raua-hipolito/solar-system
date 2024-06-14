import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Mission.css';

function MissionCard({ name, year, country, destination }) {
  return (
    <div className="containerMis">
      <div data-testid="mission-card" className="missao1">
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    </div>

  );
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
