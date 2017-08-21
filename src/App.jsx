import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Tracker from './views/Tracker';
import Resource from './views/Resource';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                  <div>
                    <Navbar/>

                    <Route exact path="/" component={Tracker}/>
                    <Route path="/resources" component={Resource}/>
                  </div>
                </BrowserRouter>
            </div>
        )
    }
};

render(
    <App/>,
    document.getElementById('root')
)
