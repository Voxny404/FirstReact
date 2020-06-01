import React from "react";
import './App.css';
import Button from 'react-bootstrap/Button';
import SpeakText from './SpeakText'
import SpeakTextGerman from './SpeakTextGerman'
import CommandText from './CommandText'
import {funcTime, speak,speakGerman} from './Tasks/functionSet';

class DeciderSpeak extends React.Component {
  constructor(props){

  super(props);
    this.vidRef = React.createRef()
    this.state = {
      value: '',
      displayText: '',
      vidRef: 'vidRef',
      displayCommands: '',
      divContainerStyle:"hidden"
    };

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
  speakTextGerman = (getGermanText) => {
    let returnTextGerman = getGermanText
    this.magicSpeakerGerman(returnTextGerman)
  }
  speakText = (getText) => {
    let returnText = getText
    this.magicSpeaker(returnText)
  }
  magicSpeakerGerman = (returnTextGerman) => {
    speakGerman(returnTextGerman)
    this.setState({displayText: returnTextGerman});
    this.resetText()
  }
  magicSpeaker = (returnText) =>{
    speak(returnText)
    this.setState({displayText: returnText});
    this.resetText()
  }
  speakDecider = (text) =>{
    let textFixed = text.toLowerCase()
    let returnText


    if(!CommandText.allcommands.match(textFixed) === false && textFixed.length >= 4){

      if(textFixed){

        //help
        if(CommandText.help.includes(textFixed)&&CommandText.help.indexOf(textFixed)){
           this.speakText(SpeakText.help)
        }
        //displays all commands
        if(CommandText.commands.includes(textFixed)&&CommandText.commands.indexOf(textFixed)){
          returnText = SpeakText.listCommands
          this.magicSpeaker(returnText)
          this.setState({divContainerStyle: 'display'})
          this.setState({displayCommands: CommandText.allcommands.replace(/,/gi, " # ")});
        }
        //disable command display
        if(CommandText.commandsDisable.includes(textFixed)&&CommandText.commandsDisable.indexOf(textFixed)){
          returnText = SpeakText.listCommandsD
          this.magicSpeaker(returnText)
          this.setState({divContainerStyle: 'hidden'})
          this.setState({displayCommands: CommandText.allcommands.replace(/,/gi, "\r\n")});
        }
        //what's your name
        if(CommandText.whatIsYourName.includes(textFixed)&&CommandText.whatIsYourName.indexOf(textFixed)){
          returnText = SpeakText.name
          this.magicSpeaker(returnText)
        }
        //how old are you
        if(CommandText.howOld.includes(textFixed)&&CommandText.howOld.indexOf(textFixed)){
          returnText = SpeakText.howOld
          this.magicSpeaker(returnText)
        }
        //whatever response
        if(CommandText.whatEver.includes(textFixed)&&CommandText.whatEver.indexOf(textFixed)){
          returnText = SpeakText.whatEver
          this.magicSpeaker(returnText)
        }
        //sing for me
        if(CommandText.singing.includes(textFixed)&&CommandText.singing.indexOf(textFixed)){
          returnText = SpeakText.singing
          this.magicSpeaker(returnText)
        }
        //speak some german
        if(CommandText.speakGerman.includes(textFixed)&&CommandText.speakGerman.indexOf(textFixed)){
          returnText = SpeakText.speakGerman
          this.magicSpeaker(returnText)
        }
        //who are you
        if(CommandText.whoAreYou.includes(textFixed)&&CommandText.whoAreYou.indexOf(textFixed)){
          returnText = SpeakText.whoA
          this.magicSpeaker(returnText)
        }
        //how are you
        if(CommandText.howAreYou.includes(textFixed)&&CommandText.howAreYou.indexOf(textFixed)){
          returnText = SpeakText.howA
          this.magicSpeaker(returnText)
        }
        //hello
        if(CommandText.hello.includes(textFixed)&&CommandText.hello.indexOf(textFixed)){
          returnText = SpeakText.HelloA
          this.magicSpeaker(returnText)
        }
        //music
        if(CommandText.music.includes(textFixed)&&CommandText.music.indexOf(textFixed)){
          setTimeout(() => {
            this.playVideo()
          }, 5000)

          returnText = SpeakText.musicP
          this.magicSpeaker(returnText)
        }
        //music stop
        if(CommandText.stopMusic.includes(textFixed)&&CommandText.stopMusic.indexOf(textFixed)){
          this.stopVideo()

          returnText = SpeakText.musicS
          setTimeout(() => {
            this.magicSpeaker(returnText)
          }, 1000)
        }
        //i am fine
        if(CommandText.iAmFine.includes(textFixed)&&CommandText.iAmFine.indexOf(textFixed)){
          returnText = SpeakText.fineA
          this.magicSpeaker(returnText)
        }
        //jokes
        if(CommandText.tellMeAJoke.includes(textFixed)&&CommandText.tellMeAJoke.indexOf(textFixed)){
          let jokeIndex = Math.floor(Math.random() * SpeakText.jokeA.length)
          returnText = SpeakText.jokeA[jokeIndex]
          speak(returnText)
          this.setState({displayText: returnText});
          setTimeout(() => {
            this.resetText()
          }, 3000)
        }
        //who is your creator
        if(CommandText.whoIsYourCreator.includes(textFixed)&&CommandText.whoIsYourCreator.indexOf(textFixed)){
          returnText = SpeakText.creator
          this.magicSpeaker(returnText)
        }
        //who is voxny
        if(CommandText.whoIsVoxny.includes(textFixed)&&CommandText.whoIsVoxny.indexOf(textFixed)){
          returnText = SpeakText.creatorA
          speak(returnText)
          this.setState({displayText: "https://github.com/Voxny404"});
          setTimeout(() => {
            this.resetText()
          }, 5000)

        }
        //activate power mode
        if(CommandText.activatePowerMode.includes(textFixed)&&CommandText.activatePowerMode.indexOf(textFixed)){
          returnText = SpeakText.PowerMA
          speak(returnText)
          this.setState({displayText: 'Activating power mode!......'});
          this.resetText()
        }
        //time
        if(CommandText.time.includes(textFixed)&&CommandText.time.indexOf(textFixed)){
          returnText = 'it is ' + funcTime().replace(/:/, ' ')
          speak(returnText)
          this.setState({displayText: "It is "+funcTime()});
          this.resetText()
        }
        /////////////////////////////////////////
        //german section
        if(CommandText.hilfe.includes(textFixed)&&CommandText.hilfe.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.hilfe)
        }
        //displays all commands
        if(CommandText.befehle.includes(textFixed)&&CommandText.befehle.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.listCommands)
          this.setState({divContainerStyle: 'display'})
          this.setState({displayCommands: CommandText.allcommands.replace(/,/gi, " # ")});
        }
        //disable command display
        if(CommandText.befehleDisable.includes(textFixed)&&CommandText.befehleDisable.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.listCommandsD)
          this.setState({divContainerStyle: 'hidden'})
          this.setState({displayCommands: CommandText.allcommands.replace(/,/gi, "\r\n")});
        }
        //what's your name
        if(CommandText.wasIstDeinName.includes(textFixed)&&CommandText.wasIstDeinName.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.name)
        }
        //how old are you
        if(CommandText.wieAlt.includes(textFixed)&&CommandText.wieAlt.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.howOld)
        }
        //whatever response
        if(CommandText.wasAuchImmer.includes(textFixed)&&CommandText.wasAuchImmer.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.whatEver)
        }
        //sing for me
        if(CommandText.singen.includes(textFixed)&&CommandText.singen.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.singing)
        }
        //speak some german
        if(CommandText.sprichEnglish.includes(textFixed)&&CommandText.sprichEnglish.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.speakGerman)
        }
        //who are you
        if(CommandText.werBistDu.includes(textFixed)&&CommandText.werBistDu.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.whoA)
        }
        //how are you
        if(CommandText.wieGehtEsDir.includes(textFixed)&&CommandText.wieGehtEsDir.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.howA)
        }
        //hello
        if(CommandText.hallo.includes(textFixed)&&CommandText.hallo.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.HelloA)
        }
        //music
        if(CommandText.musik.includes(textFixed)&&CommandText.musik.indexOf(textFixed)){
          setTimeout(() => {
            this.playVideo()
          }, 5000)
          this.speakTextGerman(SpeakTextGerman.musicP)
        }
        //music stop
        if(CommandText.stopMusik.includes(textFixed)&&CommandText.stopMusik.indexOf(textFixed)){
          this.stopVideo()

          setTimeout(() => {
            this.speakTextGerman(SpeakTextGerman.musicS)
          }, 1000)
        }
        //i am fine
        if(CommandText.mirGehtEsgut.includes(textFixed)&&CommandText.mirGehtEsgut.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.fineA)
        }
        //jokes
        if(CommandText.sagEinenWitz.includes(textFixed)&&CommandText.sagEinenWitz.indexOf(textFixed)){
          let jokeIndex = Math.floor(Math.random() * SpeakText.jokeA.length)
          returnText = SpeakTextGerman.jokeA[jokeIndex]
          speakGerman(returnText)
          this.setState({displayText: returnText});
          setTimeout(() => {
            this.resetText()
          }, 3000)
        }
        //who is your creator
        if(CommandText.werIstDeinErsteller.includes(textFixed)&&CommandText.werIstDeinErsteller.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.creator)
        }
        //who is voxny
        if(CommandText.werIstVoxny.includes(textFixed)&&CommandText.werIstVoxny.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.creatorA)
          this.setState({displayText: "https://github.com/Voxny404"});
          setTimeout(() => {
            this.resetText()
          }, 5000)

        }
        //activate power mode
        if(CommandText.activirePowerMode.includes(textFixed)&&CommandText.activirePowerMode.indexOf(textFixed)){
          this.speakTextGerman(SpeakTextGerman.PowerMA)
          this.setState({displayText: 'Activating power mode!......'});
          this.resetText()
        }
        //time
        if(CommandText.zeit.includes(textFixed)&&CommandText.zeit.indexOf(textFixed)){
          returnText = 'Es ist ' + funcTime().replace(/:/, 'Uhr ')
          speakGerman(returnText)
          this.setState({displayText: "Es ist "+funcTime()+' Uhr'});
          this.resetText()
        }
      }
    } else {
      // dont know the command
      returnText = SpeakText.DKA
      this.magicSpeaker(returnText)
    }
    //being mean 1
    if(textFixed.includes(CommandText.FUA)){
      returnText = SpeakText.FUA
      this.magicSpeaker(returnText)
    }
    //being mean 2
    if(!textFixed.includes(CommandText.FUA)){
      if(textFixed.includes(CommandText.BA)){
        returnText = SpeakText.BA
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
      overflow: 'hidden',
      fontFamily:  'Lobster',
      color: '#a4bdba',
    }
    const copyRightStyle = {
      color: '#1f2329',
      backgroundColor: '#1e2229',
      padding: "20px",
      border: '1px solid black',
    }
    return(
      <div>
        <p style = {{color: '#61dafb',fontFamily:  'Lobster'}}> {this.state.displayText}</p>
        <br />
        <br />
        <textarea value={this.state.value}
          type="text" placeholder="Type something"
          style={textInputStyle}
          onChange={this.myChangeHandler} onKeyPress={
            event =>{
              if(event.key === 'Enter'){
                event.preventDefault();
                this.speakDecider(this.state.value);
                this.setState({value: ""});
              }}
          }/>
        <br />
        <br />
        <div className={this.state.divContainerStyle}>
          <div>
            <p  style={copyRightStyle}> {this.state.displayCommands} </p>
          </div>
        </div>
        <video ref={this.vidRef}>
          <source src="http://94.249.254.122:9800/listen1" type="audio/mpeg" />
        </video>
        <br />

        <Button style={{display: 'none'}} onClick={() => {this.speakDecider(this.state.value);this.setState({value: ""})}} variant="outline-primary">Send</Button>{' '}

      </div>
    );
  }


}
export default DeciderSpeak;
