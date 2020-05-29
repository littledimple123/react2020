import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Detail from './detail/index'

const BaseRouter = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/detail/index' component={Detail} />
    </Switch>
  </HashRouter>
);
export default BaseRouter