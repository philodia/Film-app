import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ListeFilms from './ListeFilms';
import DescriptionFilm from './DescriptionFilm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Application de Cinéma</h1>
        <Route exact path="/" component={ListeFilms} />
        <Route path="/film/:id" component={DescriptionFilm} />
      </div>
    </Router>
 );
}

export default App;

