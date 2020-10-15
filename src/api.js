const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/?offset=300&limit=300';
async function callApi(pokemonId) {
  let url = '';

  if (pokemonId === '') {
    url = BASE_URL;
  } else {
    url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;
  }

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

const api = {
  pokemon: {
    list() {
      return callApi('');
    },
    // create(fruit) {
    //   // throw new Error('500: Server error');
    //   return callApi(`/fruits`, {
    //     method: 'POST',
    //     body: JSON.stringify(fruit),
    //   });
    // },
    read(pokemonId) {
      return callApi(pokemonId);
    },
    // update(fruitId, updates) {
    //   return callApi(`/fruits/${fruitId}`, {
    //     method: 'PUT',
    //     body: JSON.stringify(updates),
    //   });
    // },
    // // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    // remove(fruitId) {
    //   return callApi(`/fruits/${fruitId}`, {
    //     method: 'DELETE',
    //   });
    // },
  },
};

export default api;
