import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetTime from './GetTime';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
//import { Button } from "./components/Button";
import {funcTime,speak} from './Tasks/functionSet';
import SpeakText from './SpeakText'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.vidRef = React.createRef()
    this.state = { value: '' , displayText: '',vidRef: 'vidRef'};
    speak("")
  }

  playVideo() {this.vidRef.current.play()}

  stopVideo() {this.vidRef.current.pause();}

  myChangeHandler = (event) => {
    this.setState({value: event.target.value});
  }

  resetText = () =>{
    setTimeout(() => {
      this.setState({displayText: ' '});
    }, 5000)
  }
  magicSpeaker = (returnText) =>{
    speak(returnText)
    this.setState({displayText: returnText});
    this.resetText()
  }
  speakDecider = (text) =>{
    let textFixed = text.toLowerCase()
    let returnText
    let commands =
    [
      'help',
      "what's your name",
      "who are you",
      "how are you",
      "hello",
      "music",
      "stop music",
      "i'm fine",
      "tell me a joke",
      "who is your creator",
      "who is voxny",
      "activate power mode",
      "time"
    ]
    if(commands.includes(textFixed)){
      if(textFixed){
        if(textFixed === 'help'){
          returnText = SpeakText.help
          this.magicSpeaker(returnText)
        }
        if(textFixed === "what's your name"){
          returnText = SpeakText.name
          this.magicSpeaker(returnText)
        }
        if(textFixed === "who are you"){
          returnText = SpeakText.whoA
          this.magicSpeaker(returnText)
        }
        if(textFixed === 'how are you'){
          returnText = SpeakText.howA
          this.magicSpeaker(returnText)
        }
        if(textFixed === 'hello'){
          returnText = SpeakText.HelloA
          this.magicSpeaker(returnText)
        }
        if(textFixed === 'music'){
          setTimeout(() => {
            this.playVideo()
          }, 5000)

          returnText = SpeakText.musicP
          this.magicSpeaker(returnText)
        }
        if(textFixed === 'stop music'){
          this.stopVideo()

          returnText = SpeakText.musicS
          setTimeout(() => {
            this.magicSpeaker(returnText)
          }, 1000)
        }
        if(textFixed === "i'm fine"){
          returnText = SpeakText.fineA
          this.magicSpeaker(returnText)
        }
        if(textFixed === "tell me a joke"){
          returnText = SpeakText.jokeA
          this.magicSpeaker(returnText)
        }
        if(textFixed === "who is your creator"){
          returnText = SpeakText.creator
          this.magicSpeaker(returnText)
        }
        if(textFixed === "who is voxny"){
          returnText = SpeakText.creatorA
          speak(returnText)
          this.setState({displayText: "https://github.com/Voxny404"});
          setTimeout(() => {
            this.resetText()
          }, 5000)

        }
        if(textFixed === "activate power mode"){
          returnText = SpeakText.PowerMA
          speak(returnText)
          this.setState({displayText: 'Activating power mode!......'});
          this.resetText()
        }

        if(textFixed === 'time'){
          returnText = 'it is ' + funcTime().replace(/:/, ' ')
          speak(returnText)
          this.setState({displayText: "It is "+funcTime()});
          this.resetText()
        }
      }
    }

    if(textFixed.includes('fuck you')){
      returnText = SpeakText.FUA
      this.magicSpeaker(returnText)
    }
    if(!textFixed.includes('fuck you')){
      if(textFixed.includes('bitch')){
        returnText = SpeakText.BA
        this.magicSpeaker(returnText)
      }
      if(!textFixed.includes('bitch') && !commands.includes(textFixed)){
        returnText = SpeakText.DKA
        this.magicSpeaker(returnText)
      }
    }


  }



  render(){
    const textInputStyle = {
      backgroundColor: 'transparent',
      border: 'none', outline: 'none',
      borderBottom: '1px solid black',
      height: 40,
      overflow: 'hidden'
    }


    return (
      <div className="App">

        <header className="App-header">
        <div style={{ display: "flex" }}>

        </div>
          <p /> {this.state.displayText}

          <img src={logo} className="App-logo" alt="logo" />
          <GetTime />

          <br />
          <textarea value={this.state.value}
            type="text" placeholder="Type something"
            style={textInputStyle}
            onChange={this.myChangeHandler} onKeyPress={
              event =>{if(event.key === 'Enter'){event.preventDefault();this.speakDecider(this.state.value);this.setState({value: ""});}}
            }/>
          <br />

          <Button style={{display: 'none'}} onClick={() => {this.speakDecider(this.state.value);this.setState({value: ""})}} variant="outline-primary">Send</Button>{' '}

          <video ref={this.vidRef}>
            <source src="http://94.249.254.122:9800/listen1" type="audio/mpeg">

            </source>

          </video>
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
