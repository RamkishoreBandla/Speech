import React, { useEffect } from 'react'

let recognition = null;
  
if('webkitSpeechRecognition' in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.language = 'en-US';
    // recognition.
}

function useSpeechRecognition() {
  
const [transcript, setTranscript] = React.useState('');
const [islistening, setIsListening] = React.useState(false);
  
useEffect(()=>{
if(!recognition) return;

recognition.onresult = (event) => {
    console.log(event);
    setTranscript(event.results[event.results.length - 1][0].transcript);
    recognition.stop();
    setIsListening(false);
}

},[]); 

const startListening = () => {
    setTranscript("");
    setIsListening(true);
    recognition.start();
    // console.log("Listening...", recognition);
}

const stopListening = () => {
    // setTranscript("");
    setIsListening(false);
    recognition.stop();
}

return {
    transcript,
    islistening,
    startListening,
    stopListening,
    hasRecognition: !!recognition
}
   
  
}

export default useSpeechRecognition