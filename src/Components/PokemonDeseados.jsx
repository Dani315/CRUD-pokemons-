import React from 'react';
import Context from '../store';
import Card from './Card';

function PokemonDeseados() {
  return (
    <Context.Consumer>
      {
        (value) => (
          <div>
            {value.name.map((pokemon) => {
              return (
                <>
                  <Card pokemon={pokemon} aux={true} />
                </>
              );
            })}
          </div>
        )
      }
    </Context.Consumer>
  );
}
export default PokemonDeseados;
