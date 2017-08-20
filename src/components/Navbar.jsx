import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
    background: #f85032;
    background: -moz-linear-gradient(top, #f85032 0%, #f16f5c 100%, #f02f17 100%, #e73827 100%);
    background: -webkit-linear-gradient(top, #f85032 0%,#f16f5c 100%,#f02f17 100%,#e73827 100%);
    background: linear-gradient(to bottom, #f85032 0%,#f16f5c 100%,#f02f17 100%,#e73827 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f85032', endColorstr='#e73827',GradientType=0 );

    height: 60px;
    
    div {
        width: 100%;
    
        .navbar-brand {
            color: white;
            font-size: 24px;
            letter-spacing: 3px;
            cursor: pointer;
            margin-left: 20px;
            
            &:hover {
                color: white;
                opacity: 0.9;
            }
        }
    }

    .custom-btn {
        color: white;
        letter-spacing: 2px;
        font-size: 12px;
        border-color: white;
        cursor: pointer;
        width: 125px;
        padding: 5px;
        &:hover {
            background-color: transparent;            
        }
    }
`;

const Navbar = (props) => {
    return (
        <Wrapper className="navbar navbar-toggleable-md navbar-light bg-faded">            
            <div className="">
                <a className="navbar-brand">React Training Tracker</a>                    
            </div>

            <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-secondary custom-btn btn-sm my-2 my-sm-0" type="submit">Resources</button>
            </form>
        </Wrapper>
    )
};

export default Navbar;
