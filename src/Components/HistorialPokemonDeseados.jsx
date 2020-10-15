import React from 'react';
import { Link } from 'react-router-dom';
import Context from '../store';

function HistorialPokemonDeseados() {
  return (
    <>
      <Context.Consumer>
        {
          (value) => (
            <div className="container">
              <h3>
              PRESIONA AQUÍ
              </h3>
              <Link to="/Historial">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => {
                    localStorage.setItem(
                      'totalCarrito', JSON.stringify(
                        [...JSON.parse(localStorage.getItem('totalCarrito')), ...value.name,
                        ],
                      ),
                    );
                  }}
                >
            Ver historial de pokemones deseados
                </button>
              </Link>
            </div>
          )
        }
      </Context.Consumer>
    </>
  );
}
export default HistorialPokemonDeseados;
