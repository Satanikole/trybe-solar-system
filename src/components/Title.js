import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="titles">
        {headline}
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;

// Tive alguns erros de props no es lint e consegui resolver graças a ajuda de uma colega de turma chamada Juliane e esse link: https://stackoverflow.com/questions/38684925/react-eslint-error-missing-in-props-validation
// Referenciando também um colega de turma chamado Matheus Alves que foi muito solícito em me explicar melhor o que pedia o requisito 05
