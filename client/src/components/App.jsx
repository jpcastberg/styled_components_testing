import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: purple;
  };
`

const Wrapper = styled.section`
  padding: 4em;
  background: ${props => props.color || 'papayawhip'};
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
  text-decoration: none;
`

const Link = ({ className, children }) => (
  <a href="/" className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

const StyledCounter = styled.div`
  /* ... */
`
const Paragraph = styled.p`
  /* ... */
`

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    )
  }
}

const App = () => (
  <div>
    <GlobalStyle />
    <Wrapper>
      <Title>This is a styled component</Title>
    </Wrapper>
    <Wrapper color="silver">
      <Button primary>Primary Button</Button>
      <Button>Other Button</Button>
    </Wrapper>
    <Wrapper>
      <TomatoButton as="a" href="https://www.google.com">I AM A TOMATO BUTTON!</TomatoButton>
    </Wrapper>
    <Wrapper color="darkcyan">
      <StyledLink>This is a styled React functional component</StyledLink>
    </Wrapper>
    <Wrapper>
      <Counter />
    </Wrapper>
  </div>
);

export default App;
