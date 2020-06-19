import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './App'
import Detail from './detail/index'
import List from './list/index'
import MenuPage from './menuPage/index'

const BaseRouter = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route exact path='/detail/index' component={Detail} />
      <Route exact path='/list/index' component={List} />
      <Route exact path='/menuPage/index' component={MenuPage} />
    </Switch>
  </HashRouter>
);
export default BaseRouter