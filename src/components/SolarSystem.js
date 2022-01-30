import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planets">
          <Title headline="Planetas" />
        {planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;

// Referencianddo um colega de turma chamado Matheus Alves pela ajuda e explicação do requisito 05.
