import React, {Component} from 'react';
import axios from 'axios';

function TextToSpeech(props) {
    axios.post('https://viettelgroup.ai/voice/api/tts/v1/rest/syn', {
        "text": props.text,
        "voice": "trinhthiviettrinh",
        "id": "2",
        "without_filter": false,
        "speed": 1.0,
        "tts_return_option": 2
    }, {
        headers: {
            'Content-Type': 'application/json',
            'token': 'n-73-U7wDiEDEyt6WyqAwZ-RQSSUfz3tr7ba9xi475XtPhbORvBenYIqGr5qcc6o'
        }
    }).then(response => {
            console.log('response status: '+response.status);
            let audio = response.data;
            let audioElement = new Audio("data:audio/wav;base64," + audio);
            audioElement.setAttribute('controls','');
            console.log('audioElement: '+audioElement);
            document.getElementById('audio-container').appendChild(audioElement);
        }).catch(error => console.log(error));

    return (
        <>
            <div id='audio-container'></div>
        </>
    );
}

export default TextToSpeech;