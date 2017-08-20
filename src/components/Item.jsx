import React, { Component } from 'react';
import styled from 'styled-components';
import { string, array } from 'prop-types';

const Wrapper = styled.div`

    width: 100%;
    margin: 20px 0;

    .day {
        font-size: 14px;
        font-weight: bolder;
        color: #6C7A89;
        letter-spacing: 1px;
    }

    .card-title {
        font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;

        .icon {
            margin-left: 10px;

            &.fa-lock {
                color: #D64541;
            }

            &.fa-check {
                color: #26A65B;
            }
        }
    }

    .card-text {
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 1px;
    }

    
    .content {
        .header-title {
            color: #6C7A89;
            font-weight: bold;
            font-size: 14px;
            letter-spacing: 1px;
        }
        .content-list {
            li {
                font-size: 12px;
                font-weight: 300;
                letter-spacing: 2px;
            }
        }
    }
`;

export default class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggle: false
        }
    }

    toggleShowContent = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }

    render() {
        let props = this.props;
        let isContent = props.contents.length > 0;
        let contents = props.contents.map((item, index) => <li key={index}> { item} </li>);
        let progress = props.progress === 'pending' ? 'icon fa  fa-lock' : 'icon fa  fa-check';
        let progressText = props.progress === 'pending' ? 'In Progress' : 'Completed';
            return (
                <Wrapper className="item-wrapper">
                    <h5 className="day">{ props.day }</h5>
        
                    <div className="card">
                        <div className="card-block">
                            <h3 className="card-title">
                                { props.title }

                                <i className={ progress } aria-hidden="true" title={ progressText }></i>
                            </h3>
                            
                            <p className="card-text">
                                <div className="row">
                                    <div className="col-md-10">
                                        { props.desc }
                                    </div>

                                    <div className="col-md-2">
                                        { isContent &&
                                            <button className="btn btn-outline-success btn-sm" onClick={this.toggleShowContent}>
                                                { this.state.isToggle ? 'Hide Content' : 'Show Content' }
                                            </button>
                                        }                                        
                                    </div>
                                </div>
                            </p>

                            { this.state.isToggle && 
                            
                                <div className="content">
                                    <h5 className="header-title">Contents</h5>
                                    <ul className="content-list">
                                        { contents }
                                    </ul>
                                </div>
                            }                                                  
                        </div>
                    </div>
                </Wrapper>      
            )
    }
}


Item.propTypes = {
    day: string.isRequired,
    title: string.isRequired,
    desc: string.isRequired,
    contents: array
};