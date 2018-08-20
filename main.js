import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App.jsx';
import Login from './client/Login.jsx';
import {HashRouter, Route, Link} from 'react-router-dom';
import expenseForm from './client/expenseForm.jsx';

ReactDOM.render(<HashRouter>
      <div>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={App} />
        <Route exact path='/loadconf' component={expenseForm} />
      </div>
    </HashRouter>, document.getElementById('app'));
