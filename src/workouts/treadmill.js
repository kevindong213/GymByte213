import React, { useState } from 'react';

export function Treadmill() {
    const [speed, setSpeed] = useState("");
    const [incline, setIncline] = useState("");
    const [minutes, setMinutes] = useState("");

    const [outputText, setOutputText] = useState("");

    function getOutputText() {
        return `Today you spent ${minutes} minutes on the treadmill at ${speed} mi/hr at ${incline} degrees.`
    }

    function onSubmit(e) {
        e.preventDefault();

        setOutputText(getOutputText());
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Speed: </label>
                    <input type="number" value={speed} onChange={(e) => setSpeed(e.target.value)} />
                    <label>mi/hr</label>
                </div>
                <div>
                    <label>Incline: </label>
                    <input type="number" value={incline} onChange={(e) => setIncline(e.target.value)} />
                    <label>degrees</label>
                </div>
                <div>
                    <label>Time: </label>
                    <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
                    <label>minutes</label>
                </div>
                <input type="submit"></input>
            </form>

            <hr></hr>

            <p>{outputText}</p>
        </div>
    );
}

export default Treadmill;