
import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetTime from './GetTime';
import DeciderSpeak from './DeciderSpeak';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';
//import Button from 'react-bootstrap/Button';
//import { Button } from "./components/Button";

import {speak} from './Tasks/functionSet';


class App extends React.Component {

  constructor(props) {
    super(props);
    speak("")
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <GetTime />
          <br />
          <DeciderSpeak/>

          <p style={{fontSize:'small',color: 'gray',fontWeight: 'bold',opacity: '0.2'}}>Voxny404 © 2020 </p>
        </header>
      </div>
    );

  }
}


export default App;
