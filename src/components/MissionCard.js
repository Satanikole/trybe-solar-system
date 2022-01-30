import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="mission-card">
        <h3 data-testid="mission-name" className="mission-titles">{name}</h3>
        <h3 data-testid="mission-year" className="minor-titles">{year}</h3>
        <h3 data-testid="mission-country" className="minor-titles">{country}</h3>
        <h3 data-testid="mission-destination" className="minor-titles">{destination}</h3>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
