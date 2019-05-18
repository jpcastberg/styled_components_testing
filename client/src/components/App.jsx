import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
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

const App = () => (
  <Wrapper>
    <Title>This is a styled component</Title>
    <Button primary>Primary Button</Button>
    <Button>Other Button</Button>
    <TomatoButton as="a" href="https://www.google.com">I AM A TOMATO BUTTON!</TomatoButton>
    <StyledLink>This is a styled React functional component</StyledLink>
  </Wrapper>
);

export default App;
