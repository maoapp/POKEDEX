// @vendors
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppReducer from './pokeapp/reducers';

//@style
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// @Components
import Login from './pokeapp/containers/Login';
import Register from './pokeapp/containers/Register';
import NavBar from './pokeapp/containers/Navbar';
import PokemonDetail from './pokeapp/containers/PokemonDetail';
import Layout from './pokeapp/containers/Pokemons'; 

const store = createStore(AppReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="container">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Layout} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/pokemon/:index" component={PokemonDetail} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
