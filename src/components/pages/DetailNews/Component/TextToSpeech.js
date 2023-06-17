import React, { useState, useEffect } from "react";
import style from "./TextToSpeech.module.scss"
const TextToSpeech = ({ text }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [speech, setSpeech] = useState(null);
    const [pitch, setPitch] = useState(1);
    const [rate, setRate] = useState(1);
    const [volume, setVolume] = useState(1);

    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    useEffect(() => {
        const u = new SpeechSynthesisUtterance(text);
        u.lang ="vi-VN";
        setSpeech(u);
        return () => {
            synth.cancel();
        };
    }, [text]);

    const handlePlay = () => {
        const synth = window.speechSynthesis;
        if (isPaused) {
            synth.resume();
        } else {
            speech.voice = voices[3];
            speech.pitch = pitch;
            speech.rate = rate;
            speech.volume = volume;
            synth.speak(speech);
        }
        setIsPaused(false);
    };

    const handlePause = () => {
        const synth = window.speechSynthesis;

        synth.pause();

        setIsPaused(true);
    };

    const handleStop = () => {
        const synth = window.speechSynthesis;

        synth.cancel();

        setIsPaused(false);
    };


    const handlePitchChange = (event) => {
        setPitch(parseFloat(event.target.value));
    };

    const handleRateChange = (event) => {
        setRate(parseFloat(event.target.value));
    };

    const handleVolumeChange = (event) => {
        setVolume(parseFloat(event.target.value));
    };

    return (
        <div className={style["wrapper"]}>
            <br />
            <label>
                <table>
                    <tr>
                        <td>Cao độ:</td>
                        <td className={style["input"]}><input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={pitch}
                            onChange={handlePitchChange}
                        /></td>
                    </tr>
                    <br/>
                    <tr>
                        <td>Tốc độ nói:</td>
                        <td className={style["input"]}><input
                            type="range"
                            min="0.5"
                            max="2"
                            step="0.1"
                            value={rate}
                            onChange={handleRateChange}
                        /></td>
                    </tr>
                    <br/>
                    <tr>
                        <td> Âm lượng:
                            </td>
                        <td className={style["input"]}><input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={volume}
                            onChange={handleVolumeChange}
                        /></td>
                    </tr>
                </table>
            </label>
            <br />
            <br />
            <div  className={style["btn"]}>
                <button className={style["btn-item"]} onClick={handlePlay}>{isPaused ? "Tiếp tục" : "Đọc"}</button>
                <button className={style["btn-item"]} onClick={handlePause}>Pause</button>
                <button className={style["btn-item"]} onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
};

export default TextToSpeech;