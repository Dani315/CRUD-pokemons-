import React from 'react';
import PropTypes from 'prop-types';
import Context from '../store';
import './styles/Card.css';


function Card(props) {
  const { aux, pokemon } = props;

  if (aux === true) {
    return (
      <Context.Consumer>
        {
        (value) => (
          <>
            <div className="card CardPokemon">
              <div className="card-header ">
                <strong className="letter">
                  {
                      pokemon.forms[0].name.toUpperCase()
                      }
                </strong>
                <img className="image" src={pokemon.sprites.front_default} alt="Logo Pokemon" />
              </div>
              <div className="card-body">
                <tr className="trStyle1">
                  <td className="tdStyle1">
                    <strong className="letter">
                        EXP:
                      {pokemon.base_experience}
                    </strong>
                  </td>
                  <td className="tdStyle1">
                    <strong className="letter">
                        HEIGHT:
                      {pokemon.height}
                    </strong>
                  </td>
                  <td className="tdStyle1">
                    <strong className="letter">
                       WEIGHT:
                      {pokemon.weight}
                    </strong>
                  </td>
                </tr>
              </div>
              <button type="button" className="btn btn-danger" onClick={() => { value.removeName(pokemon); }}>
            Eliminar
              </button>
            </div>
            <br />
          </>
        )
          }
      </Context.Consumer>
    );
  }

  return (
    <>
      <div className="card CardPokemon">
        <div className="card-header ">
          <strong className="letter">
            {
          pokemon.forms[0].name.toUpperCase()
          }
          </strong>
          <img className="image" src={pokemon.sprites.front_default} alt="Logo Pokemon" />
        </div>
        <div className="card-body">
          <tr className="trStyle1">
            <td className="tdStyle1">
              <strong className="letter">
                EXP:
                {pokemon.base_experience}
              </strong>
            </td>
            <td className="tdStyle1">
              <strong className="letter">
                HEIGHT:
                {pokemon.height}
              </strong>
            </td>
            <td className="tdStyle1">
              <strong className="letter">
                WEIGHT:
                {pokemon.weight}
              </strong>
            </td>
          </tr>
        </div>
      </div>
      <br />
    </>
  );
}

Card.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.string).isRequired,
  aux: PropTypes.bool.isRequired,
};
export default Card;
