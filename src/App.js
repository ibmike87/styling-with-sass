import React from 'react';
import {createGlobalStyle} from 'styled-components';
//import './App.scss';
//import Button from './components/Button';


const GlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

function App() {
  return (
      <>
          <GlobalStyle />
          <div>안녕하세요</div>
      </>
  );
}

export default App;