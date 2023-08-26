import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #e7ecf2;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

h1,
h2,
h3,
h4,
h5,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

button{
  padding: 0;
}
`;
