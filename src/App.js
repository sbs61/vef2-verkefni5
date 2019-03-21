import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Lecture from './routes/lecture/Lecture';

import './App.scss';

/*
todo:
- setja upp react-helmet = Setur upp réttan titil
- setja upp react-router = Setja upp síður 
- sækja routes
*/

// hafa browser roder utan um allt, til að gera haft nokkrar síður

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet defaultTitle="Fyrirlestur" titleTemplate="%s - Fyrirlestur"></Helmet>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:slug" component={Lecture} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;