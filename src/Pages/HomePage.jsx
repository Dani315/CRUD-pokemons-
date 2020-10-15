import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PokemonDeseados from '../Components/PokemonDeseados';
import HistorialPokemonDeseados from '../Components/HistorialPokemonDeseados';
import AllPokemons from '../Components/AllPokemons';
import api from '../api';
import Navbar from '../Components/Navbar';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      data: undefined,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

fetchData = async () => {
  this.setState({ loading: true, error: null });

  try {
    const dataS = await api.pokemon.list();
    this.setState({ loading: false, data: dataS });
  } catch (err) {
    this.setState({ loading: false, error: err });
  }
}

render() {
  const { loading, error, data } = this.state;
  if (loading === true) {
    return (  <div>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>)
  }

  if (error) {
    return 'Error';
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <AllPokemons data={data} />
          </div>
          <div className="col">
            <PokemonDeseados />
          </div>
          <div className="col">
            <HistorialPokemonDeseados />
          </div>
        </div>
      </div>
    </>
  );
}
}

export default HomePage;
