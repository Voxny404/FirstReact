import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetTime from './GetTime';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//import Button from 'react-bootstrap/Button';
//import { Button } from "./components/Button";

function App() {

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <DropdownButton id="dropdown-basic-button" title="|||" style={{ marginLeft: "auto" }}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GetTime />
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

export default App;
