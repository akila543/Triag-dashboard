import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App.jsx';

import {HashRouter, Route, Link} from 'react-router-dom';
import expenseForm from './client/expenseForm.jsx';

ReactDOM.render(<HashRouter>
      <div>
        <Route exact path='/' component={App} />
        <Route exact path='/loadconf' component={expenseForm} />
      </div>
    </HashRouter>, document.getElementById('app'));
