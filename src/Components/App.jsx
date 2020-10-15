import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../Pages/HomePage';
import Historial from '../Pages/Historial';
import Context from '../store';

import './styles/App.css';

function App() {
  localStorage.clear();
  localStorage.setItem('totalCarrito', JSON.stringify([]));
  return (
    <BrowserRouter>
      <Context.Provider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Historial" component={Historial} />
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
