import React, { useState } from 'react';

export function BenchPress() {
    const [weight, setWeight] = useState("");
    const [reps, setReps] = useState("");
    const [sets, setSets] = useState("");

    const [outputText, setOutputText] = useState("");

    function getOutputText() {
        return `Today you did ${sets} sets of ${reps} reps of bench press at ${weight} lbs.`
    }

    function onSubmit(e) {
        e.preventDefault();

        setOutputText(getOutputText());
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Weight: </label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    <label>lbs</label>
                </div>
                <div>
                    <label>Reps: </label>
                    <input type="number" value={reps} onChange={(e) => setReps(e.target.value)} />
                    <label></label>
                </div>
                <div>
                    <label>Sets: </label>
                    <input type="number" value={sets} onChange={(e) => setSets(e.target.value)} />
                    <label></label>
                </div>
                <input type="submit"></input>
            </form>

            <hr></hr>

            <p>{outputText}</p>
        </div>
    );
}

export default BenchPress;