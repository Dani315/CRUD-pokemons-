import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card';
import Navbar from '../Components/Navbar';

function Historial() {
  if (JSON.parse(localStorage.getItem('totalCarrito')).length === 0) {
    return (
      <>
        <Navbar />
        <div className="container">
          <h1>
          No se han elegido
          </h1>
          <Link
            to="/"
          >
            <button
              type="button"
              className="btn btn-info"
            >
              Volver a HomePage
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card-columns">
          {JSON.parse(localStorage.getItem('totalCarrito')).map((pokemon) => {
            return (
              <Card
                pokemon={pokemon}
                aux={false}
              />
            );
          })}
        </div>

        <Link
          to="/"
        >
          <button
            type="button"
            className="btn btn-info"
          >
          Volver a HomePage
          </button>
        </Link>
      </div>
    </>
  );
}

export default Historial;
