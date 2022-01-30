import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h2 data-testid="planet-name" className="planet-titles"> 
          { planetName }
        </h2>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
