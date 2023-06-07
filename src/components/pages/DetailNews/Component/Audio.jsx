import axios from 'axios';
import {useState} from "react";

function Audio(props) {
    async function handle() {
        console.log('handle');
        const data = {
            "text": 'chung ta la chien sy',
            "voice": "hn-quynhanh",
            "id": "2",
            "without_filter": false,
            "speed": 1.0,
            "tts_return_option": 2
        };
        const res = await fetch('https://viettelgroup.ai/voice/api/tts/v1/rest/syn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': 'AUmsqNNLqVnDLEA6pAeX2CkKwWc8IKgvzsQ4xPFYZTqm3psJZMHNfzmrukIXgCRO'
            },
            body: JSON.stringify(data)
        });

        const blob = await res.blob();
        document.getElementById('audio').src = URL.createObjectURL(blob);
    }
    handle();
    return (
        <div>
            <audio id='audio' controls></audio>
        </div>
    );
}

export default Audio;