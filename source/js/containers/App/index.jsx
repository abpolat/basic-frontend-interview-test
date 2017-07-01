import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import Advertisements from '../Advertisements/Advertisements';
import NotFound from '../NotFound';

export const routeCodes = {
  ADVERTISEMENTS: '/',
};

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <header className='container-fluid'>
            <div className="container">
              <h1>Front-End Interview Test</h1>
            </div>
          </header>
          <div className="container">
            <Switch>
              <Route exact path={ routeCodes.ADVERTISEMENTS } component={ Advertisements } />
              <Route path='*' component={ NotFound } />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
};

export default App;
