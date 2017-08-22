import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .header {
    width: 50%;

    h1 {
      font-size: .9em;
      color: #6C7A89;
      letter-spacing: 2px;
    }
  }

  .card-text {
    p {
      font-size: .8em;
      color: #6C7A89;
      letter-spacing: 1px;
    }
    h1 {
      font-size: .9em;
    }
  }

  .content {
    h1 {
      font-size: .9em;
      color: #6C7A89;
      letter-spacing: 1px;
      margin-top: 20px;
      line-height: 20px;
    }
  }
`;


const Resource = () => {
  return (
    <Wrapper className="container-fluid resource">
      <div className="header">
        <h1>Resources for the sessions and some important notes.</h1>
        <hr/>
      </div>
      <br/>
      <div className="content">
        <div className="card">
          <div className="card-block">
            <div className="card-text">
              <p>
                We will be using online code editor for this, since we have a plenty of restrictions
                in our workplace.

                Online code editor <a href="https://stackblitz.com/" target="_blank">stackblitz</a>
                <br/><br/>
                This session is mostly related to the session which I have learnt from frontendmaster on "React Redux & ES2015",
                which you find <a href="https://frontendmasters.com/courses/react/" target="_blank">here</a>
              </p>
            </div>
          </div>
        </div>
        <h1>
          This tracker application was built mainly to check our progress, so once we complete a session we are going to
          mark them as complete. And on the third and final day we are going to have a "Hackathon" sessions, where we will build
          some components and try to solve a use-case scenario's.

          <br/><br/>
          Probably, we might even have prizes for it. Still this is not confirmed.
        </h1>
      </div>
    </Wrapper>
  )
};

export default Resource;
