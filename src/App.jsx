import React, { Component } from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import Tracker from './views/Tracker';
import Resource from './views/Resource';

const Wrapper = styled.div`
    margin-top: 80px;
`;

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                  <div>
                    <Navbar/>

                    <Wrapper className="dyn-section">
                      <Route exact path="/" component={Tracker}/>
                      <Route path="/resources" component={Resource}/>
                    </Wrapper>
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
