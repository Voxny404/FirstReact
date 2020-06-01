//const puppeteer = require('puppeteer')

export const funcTime =()=>{
  let now = new Date();
  let epoch_millis = now.getTime();
  let utcSeconds = epoch_millis;
  let str = new Date(utcSeconds);
  let s = str.toString();
  let timeS = s.substr(16,5);
  return timeS
}

export const speak = (textToSpeak) =>{
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  if(textToSpeak){
    msg.voice = voices[4];
    msg.text = textToSpeak
    msg.pitch = 1.3
    msg.lang = "en-US";
    speechSynthesis.speak(msg);
  }
  if(!textToSpeak){
    msg.voice = voices[4];
    msg.text = textToSpeak
    msg.pitch = 1.3
    msg.lang = "en-US";
  }
}

export const speakGerman = (textToSpeak) =>{
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();
  if(textToSpeak){
    msg.voice = voices[3];
    msg.text = textToSpeak
    msg.pitch = 1.1
    msg.lang = "en-US";
    speechSynthesis.speak(msg);
  }
  if(!textToSpeak){
    msg.voice = voices[3];
    msg.text = textToSpeak
    msg.pitch = 1.1
    msg.lang = "en-US";
  }
}
