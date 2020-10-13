import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      current: ''
     };
     this.handleKeyPress = this.handleKeyPress.bind(this);
     this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    switch (e.keyCode) {
      case 81:
        this.playAudio('Q');
      break;
      case 87:
        this.playAudio('W');
      break;
      case 69:
        this.playAudio('E');
      break;
      case 65:
        this.playAudio('A');
      break;
      case 83:
        this.playAudio('S');
      break;
      case 68:
        this.playAudio('D');
      break;
      case 90:
        this.playAudio('Z');
      break;
      case 88:
        this.playAudio('X');
      break;
      case 67:
        this.playAudio('C');
      break;
      default:
        return;
    }
  }

  resetState = () => {
    this.setState({
      current: ''
    });
  };

  playAudio(key) {

    const audioEl = document.getElementById(key);
    audioEl.play();
    switch (key) {
      case 'Q':
        this.setState({
          current: 'Bass Drum 1'
        });
        break;
      case 'W':
        this.setState({
          current: 'Cowbell'
        });
        break;
      case 'E':
        this.setState({
          current: 'Crash 2'
        });
        break;
      case 'A':
        this.setState({
          current: 'Crash 2'
        });
        break;
      case 'S':
        this.setState({
          current: 'High Hat Close 1'
        });
        break;
      case 'D':
        this.setState({
          current: 'High Hat Close 2'
        });
        break;
      case 'Z':
        this.setState({
          current: 'Low Conga'
        });
        break;
      case 'X':
        this.setState({
          current: 'Tamborine'
        });
        break;
      case 'C':
        this.setState({
          current: 'Tom 5'
        });
        break;
      default:
        return;
    }

    window.setTimeout(this.resetState, 1000);
  }

  render() {
    return (
      <div id="drum-machine" className="container-fluid">
        
        <div className="row justify-content-center"><p id="display">{this.state.current}</p></div>
        <div className="row justify-content-center">
          <button className="drum-pad btn btn-large btn-danger mr-3" id="Bdrum1" onClick={() => this.playAudio('Q')}>Q</button>
            <audio className="clip" id="Q">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/8[kb]80s-Bdrum1.aif.mp3"></source>
            </audio>
          <button className="drum-pad btn btn-large btn-danger mr-3" id="Cowbell1" onClick={() => this.playAudio('W')}>W</button>
            <audio className="clip" id="W">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/14[kb]80s-COWBELL1.aif.mp3"></source>
            </audio>
          <button className="drum-pad btn btn-large btn-danger mr-3" id="Crash1" onClick={() => this.playAudio('E')}>E</button>
            <audio className="clip" id="E">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/83[kb]80s-CRASH1.aif.mp3"></source>
            </audio>
            </div>
            <div className="row top-buffer justify-content-center">
          <button className="drum-pad btn btn-large btn-danger mr-3" id="Crash2" onClick={() => this.playAudio('A')}>A</button>
            <audio className="clip" id="A">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/94[kb]80s-CRASH2.aif.mp3"></source>
            </audio>
          <button className="drum-pad btn btn-large btn-danger mr-3" id="HHClose1" onClick={() => this.playAudio('S')}>S</button>
            <audio className="clip" id="S">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/7[kb]80s-HHCLOSE1.aif.mp3"></source>
            </audio>
          <button className="drum-pad btn btn-large btn-danger mr-3" id="HHClose2" onClick={() => this.playAudio('D')}>D</button>
            <audio className="clip" id="D">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/5[kb]80s-HHCLOSE2.aif.mp3"></source>
            </audio>
            </div>
            <div className="row top-buffer justify-content-center">
          <button className="drum-pad btn btn-large btn-danger mr-3" id="LowConga" onClick={() => this.playAudio('Z')}>Z</button>
            <audio className="clip" id="Z">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/16[kb]80s-LOWCONGA.aif.mp3"></source>
            </audio>
          <button className="drum-pad btn btn-large btn-danger mr-3" id="Tamb1" onClick={() => this.playAudio('X')}>X</button>
            <audio className="clip" id="X">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/20[kb]80s-TAMB1.aif.mp3"></source>
            </audio>
          <button className="drum-pad btn btn-large btn-danger mr-3" id="Tom5" onClick={() => this.playAudio('C')}>C</button>
            <audio className="clip" id="C">
              <source src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-TOM5.aif.mp3"></source>
            </audio>
            </div>
      </div>
    );
  }
}

export default App;