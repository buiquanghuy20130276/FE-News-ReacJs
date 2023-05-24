import axios from 'axios';
import {useState} from "react";

function Audio(props) {
    const [audioSrc, setAudioSrc] = useState(null);
    const handleButtonClick = () => {
        const baseUrl = 'https://api.zalo.ai/v1/tts/synthesize';
        const headers = {'apikey': 'znb5Mdaj1otUUWu3jbZGUUkSGA6zY1yv'};
        const data = {'input': props.text};
        axios.post(baseUrl, data, {headers})
            .then(response => {
                console.log('data: '+response.status);
                const audioSrc = URL.createObjectURL(new Blob([response.data]));
                setAudioSrc(audioSrc);
            });
    };

    return (
        <div>
            <button onClick={handleButtonClick}>Listen</button>
            {audioSrc && <audio src={audioSrc} controls />}
        </div>
    );
}
export default Audio;