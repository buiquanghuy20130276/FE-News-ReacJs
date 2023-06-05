import axios from 'axios';
import {useState} from "react";

function Audio(props) {
    const [audioUrl, setAudioUrl] = useState(null);
    const handleButtonClick = async () => {
        const data = {
            "text": props.text,
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
                'token': '8XCd2qQwIkUuUKJg3eeGOtnyXfdpvhX90ea5DDwkapJkRVPB-Bd6Kw0du-2ivzew'
            },
            body: JSON.stringify(data)
        });

        if (!res.ok) {
            throw new Error('Fetch failed!');
        }

        const wavFile = await res.blob();
        document.getElementById('audio').src = URL.createObjectURL(wavFile);
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Listen</button>
            <audio controls id='audio'></audio>
        </div>

    );
}
export default Audio;