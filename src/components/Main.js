import React from 'react'
import useSpeechRecognition from '../hooks/useSpeechRecognition.js';

function Main() {

    const {transcript, islistening, startListening, stopListening, hasRecognition} = useSpeechRecognition();

  return (
    <div>
     {hasRecognition ? (
            <div>
                <button onClick={startListening} disabled={islistening}>Start Listening</button>
                <button onClick={stopListening} disabled={!islistening}>Stop Listening</button>
                <p>{transcript}</p>
            </div>
        ) : (
            <div>
                <p>Speech Recognition Not Supported</p>
            </div>
        )}
        
        </div>
  )
}

export default Main