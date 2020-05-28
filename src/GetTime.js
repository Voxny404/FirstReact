import React from "react";

class GetTime extends React.Component {
  constructor(props){

  super(props);

    this.state = { time: this.timeFu() };

  }

  render(){
    return(
      <div> { this.state.time } </div>
    );
  }

  timeFu(){

    let now = new Date();
    let epoch_millis = now.getTime();
    let utcSeconds = epoch_millis;
    let str = new Date(utcSeconds);
    let s = str.toString();
    let timeS = s.substr(16,5);
    return timeS

  }

  componentDidMount() {
    setInterval(() => {
      this.setState({time: this.timeFu()})
    }, 1000)
    console.log("TimeComponent Mounted...")
  }

}
export default GetTime;
