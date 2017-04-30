import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Application from './application';
import Footer from './application/footer';
import Navigation from './application/navigation';
import Resume from './application/resume/container';

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
    <Application>
      <Navigation />
      <Route exact path="/resume" component={Resume} />
      {/* <Footer /> */}
    </Application>
  </Router>
);
