import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";

function audio(props) {
    console.log(props.text);
    const[audio,setAudio] = useState(null);
    const handleClick = () => {
        let options ={
            header: {
                'Content-Type': 'application/json',
                'token': 'n-73-U7wDiEDEyt6WyqAwZ-RQSSUfz3tr7ba9xi475XtPhbORvBenYIqGr5qcc6o'
            },
            data: {
            "text": "hệ thống tổng hợp tiếng nói trung tâm không gian mạng",
            "voice": "trinhthiviettrinh",
            "id": "2",
            "without_filter": false,
            "speed": 1.0,
            "tts_return_option": 2
            }
        };
        axios.post('https://viettelgroup.ai/voice/api/tts/v1/rest/syn',options).then(response => {
            let audio = response.data.audio_content;
            let audioElement = new Audio("data:audio/wav;base64,"+audio);
            audioElement.play();
            setAudio(audio);
        }).catch(error => console.log(error));
    };
    return (
        <>
            <div>
                <button onClick={handleClick}><FontAwesomeIcon icon={faCirclePlay} />text</button>
                {audio && <audio src={'data:audio/wav;base64,${audio}'} controls />}
            </div>
        </>
    );
}

export default audio;
