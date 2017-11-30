import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import Btace13 from './containers/Btace13';
import Btared from './containers/Btared';
import Bigbully333 from './containers/Bigbully3';
import Arcell from './containers/Arcell';
import LuisFYA from './containers/LuisFYA';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="btace" component={Btace13}/>
      <Route path="btared" component={Btared}/>
      <Route path="luis" component={LuisFYA}/>
      <Route path="arcell" component={Arcell}/>
      <Route path="bigbully" component={Bigbully333}/>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
