// @vendors
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import AppReducer from 'reducers';

//@style
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// @Components
import Login from 'containers/Login';
import Register from 'containers/Register';
import NavBar from 'containers/Navbar';
import PokemonDetail from 'containers/PokemonDetail';
import Layout from 'containers/Pokemons'; 

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
