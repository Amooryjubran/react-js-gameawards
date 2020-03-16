import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css'
import Navbar from './components/navbar';
import Home from './components/Home';
import Actors from './components/Actors';
import Actress from './components/Actress';
import Films from './components/Films';
import ActorContainer from './components/ActorsContainer';
import Actresses from './components/Actresses';
import ActressContainer from './components/ActressContainer'
import FilmsContainer from './components/FilmsContainer';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Navbar title="GameAwards" />
          <Route exact path="/" render={() =><Home title="The Game Awards 2019" /> } />
          <Route path="/Actors" render={() => <ActorContainer title="Best Actors" />} />
          <Route path="/Actress" render={() => <ActressContainer title="Best Mobile Game"  />} />
          <Route path="/Films" render={() => <FilmsContainer title="Content Creator" />  } />
          
        </div>
      </BrowserRouter>
  );
}
}

export default App;
