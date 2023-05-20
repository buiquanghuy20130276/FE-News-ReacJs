import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";
import {join} from "crypto-browserify/example/bundle";

function audio(props) {
    const[audio,setAudio] = useState('');
    console.log(props.text);
    const handleClick = async () => {
        console.log("get audio")
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'token': 'n-73-U7wDiEDEyt6WyqAwZ-RQSSUfz3tr7ba9xi475XtPhbORvBenYIqGr5qcc6o'
        //     }
        // };
        // const data = {
        //     text: props.text,
        //     voice: "trinhthiviettrinh",
        //     id: "2",
        //     without_filter: false,
        //     speed: 1.0,
        //     tts_return_option: 2
        // };
        // axios.post('https://viettelgroup.ai/voice/api/tts/v1/rest/syn',{
        //     text: props.text,
        //     voice: "trinhthiviettrinh",
        //     id: "2",
        //     without_filter: false,
        //     speed: 1.0,
        //     tts_return_option: 2
        // },{
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'token': 'n-73-U7wDiEDEyt6WyqAwZ-RQSSUfz3tr7ba9xi475XtPhbORvBenYIqGr5qcc6o'
        //     }
        // })
        //     .then(response => {
        //     let audio = response.data;
        //     // let audioElement = new Audio("data:audio/wav;base64,"+audio);
        //     //     audio.play();
        //     setAudio(audio);
        // }).catch(error => console.log(error));
        try {
            const response = await axios.post('https://viettelgroup.ai/voice/api/tts/v1/rest/syn',{
                text: props.text,
                voice: "trinhthiviettrinh",
                id: "2",
                without_filter: false,
                speed: 1.0,
                tts_return_option: 2
            },{
                    headers: {
                        'Content-Type': 'application/json',
                        'token': 'n-73-U7wDiEDEyt6WyqAwZ-RQSSUfz3tr7ba9xi475XtPhbORvBenYIqGr5qcc6o'
                    }})
            setAudio(response.data.async);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <div>
                <button onClick={handleClick}><FontAwesomeIcon icon={faCirclePlay} />text</button>
                {/*{audio && <audio src={'data:audio/wav;base64,${audio}'} controls />}*/}
                <audio src={audio} controls/>
            </div>
        </>
    );
}

export default audio;
