import React, { useState } from 'react';

export function Sports() {
    const [minutes, setMinutes] = useState("");
    const [sport, setSports] = useState("basketball");

    const [outputText, setOutputText] = useState("");

    function getOutputText() {
        return `Today you spent ${minutes} minutes playing ${sport}.`
    }

    function onSubmit(e) {
        e.preventDefault();

        setOutputText(getOutputText());
    }

    return (
        <div>
            <select name="sports" value={sport} onChange={e => setSports(e.target.value)}>
                <option value="basketball">basketball</option>
                <option value="soccer">soccer</option>
                <option value="volleyball">volleyball</option>
            </select>

            <form onSubmit={onSubmit}>
                <div>
                    <label>Time Spent: </label>
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

export default Sports;