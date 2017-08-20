import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Tracker from './views/Tracker';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Tracker/>              
            </div>
        )
    }
};

render(
    <App/>,
    document.getElementById('root')
)