import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetTime from './GetTime';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
//import { Button } from "./components/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.speak("")
  }


  myChangeHandler = (event) => {
    this.setState({value: event.target.value});

  }

speak = (textToSpeak) =>{
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  msg.voice = voices[4];
  msg.text = textToSpeak;
  msg.lang = "en-US";
  speechSynthesis.speak(msg);

}

  render(){



    return (
      <div className="App">

        <header className="App-header">
        <div style={{ display: "flex" }}>

        </div>
          <img src={logo} className="App-logo" alt="logo" />
          <GetTime />
          <br />
          <textarea value={this.state.value}
            type="text" placeholder="Type something"
            style={{backgroundColor: 'transparent', border: 'none', outline: 'none', borderBottom: '1px solid black',height:'30px'}}
            onChange={this.myChangeHandler} onKeyPress={
              event =>{if(event.key === 'Enter'){this.speak(this.state.value);this.setState({value: ""});}}
            }/>
          <br />

          <Button onClick={() => {this.speak(this.state.value);this.setState({value: ""})}} variant="outline-primary">Send</Button>{' '}

          <p>

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

          </a>
        </header>
      </div>
    );


  }
}


export default App;
