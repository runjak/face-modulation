import React, { Component } from 'react';
import styled from 'styled-components';

import { detectFaces } from './face-it';

const StyledImg = styled.img`
  height: 500px;
`;

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AudioContext = window.audioContext || window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();

function createFaceNode(context, settings) {
  const delta = 1/context.sampleRate;
  let t = 0;

  const scriptNode = context.createScriptProcessor(4096, 0, 1);

  scriptNode.onaudioprocess = (audioProcessingEvent) => {
    const { freq, modDepth, modFreqFactor, modDetune } = settings;

    const { outputBuffer } = audioProcessingEvent;
    const channelData = outputBuffer.getChannelData(0);

    for(let i = 0; i < outputBuffer.length; i++) {
      t += delta;
      const modOut = Math.sin(Math.PI * 2 * t * (freq * modFreqFactor + modDetune)) * modDepth;
      channelData[i] = Math.sin(Math.PI * 2 * (t * freq + modOut)) * 0.25;
    }
  };

  return scriptNode;
}

class App extends Component {
  playAudio = () => {
    const scriptNode = createFaceNode(
      context,
      {
        freq: 55 * Math.pow(2, Math.random() * 5),
        modFreqFactor: 2,
        modDepth: 1,
        modDetune: 0,
      },
    );
    scriptNode.connect(context.destination);

    window.setTimeout(() => {
      scriptNode.disconnect(context.destination);
    }, 5000);
  };

  render() {
    return (
      <AppDiv>
        <StyledImg src="./bercow.jpg" ref={detectFaces} />
        <button onClick={this.playAudio}>Dragons!</button>
      </AppDiv>
    );
  }
}

export default App;
