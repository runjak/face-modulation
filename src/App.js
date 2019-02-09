import React, { Component } from 'react';
import styled from 'styled-components';

import { detectFaces } from './face-it';

const StyledImg = styled.img`
  height: 500px;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledImg src="./bercow.jpg" ref={detectFaces} />
      </div>
    );
  }
}

export default App;
