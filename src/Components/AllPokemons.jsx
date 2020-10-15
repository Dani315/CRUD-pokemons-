import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Context from '../store';
import api from '../api';
import './styles/AllPokemons.css';


function AllPokemons(props) {
  const { data } = props;
  return (
    <>
      <Context.Consumer>
        {
        (value) => (
          <div className="card-columns">
            {data.results.map((persona) => {
              return (
                <div className="card sizeCard letter sizeLetter">
                  <Link onClick={
                async () =>{
                  try {
                    const dataS = await api.pokemon.read(persona.name);
                    value.activateName(dataS);
                    } catch (error) {
                    console.log(error);
                  }
                }
        }          
                  >
                    <strong className="l">
                      {persona.name}
                    </strong>
                  </Link>
                </div>
              );
            })}
          </div>
        )
  }
      </Context.Consumer>
    </>
  );
}

AllPokemons.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default AllPokemons;
