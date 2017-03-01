// Whoa?!? What is this?
// Thanks to the style-loader, style-loader and css-loader, webpack allows us import scss,
// compiles it into css, and then auto-magically injects a <style> tag onto the DOM!
// Wowzers! Check out the webpack.config.js to see how to add them!
import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Main, Messages, NewChannel } from './components';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="new-channel" component={NewChannel} />
      <Route path="channels/:channelId" component={Messages} />
      <IndexRedirect to="channels/1" />
    </Route>
  </Router>,
  document.getElementById('app')
);
