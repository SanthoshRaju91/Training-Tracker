import React, { Component } from 'react';
import styled from 'styled-components';

import Item from '../components/Item';
import data from '../data/tracker';

const Wrapper = styled.div`
    margin-top: 25px;

    .header {
        width: 45%;
        margin: 0 auto;        
        .header-5 {
            font-size: 18px;
            letter-spacing: 2px;
            font-weight: 300;
        }
    }
`; 

export default class Tracker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Wrapper className="container-fluid">                
                <div className="header text-center">
                    <h5 className="header-5">Tracking our progress on <strong>React Training</strong> - Timeline</h5>
                    <hr/>
                </div>

                <br/>

                <div className="container-fluid">
                    { data.map(item => <Item key={item.id} { ...item }/>) }
                </div>
            </Wrapper>
        )
    }
};