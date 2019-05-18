import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export default class App extends Component {
  render() {
    return (
      <div>
        <Title>This is a styled component!!!!!</Title>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
