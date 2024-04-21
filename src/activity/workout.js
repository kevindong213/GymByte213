import React, { useState } from 'react';
import Treadmill from '../workouts/treadmill';
import BenchPress from '../workouts/benchPress';
import LegPress from '../workouts/legPress';

export function Workout() {
    const [treadmillToggle, setTreadmillToggle] = useState(true);
    const [benchPressToggle, setBenchPressToggle] = useState(false);
    const [legPressToggle, setLegPressToggle] = useState(false);

    function updateToggle(event) {
        switch (event.target.value) {
            case "treadmill":
                setTreadmillToggle(true);
                setBenchPressToggle(false);
                setLegPressToggle(false);
                break;
            case "benchPress":
                setTreadmillToggle(false);
                setBenchPressToggle(true);
                setLegPressToggle(false);
                break;
            case "legPress":
                setTreadmillToggle(false);
                setBenchPressToggle(false);
                setLegPressToggle(true);
                break;
            default:
        }
    };

    return (
        <div>
            <select name="exercises" onChange={updateToggle}>
                <option value="treadmill">treadmill</option>
                <option value="benchPress">bench press</option>
                <option value="legPress">leg press</option>
            </select>

            {treadmillToggle && <Treadmill />}
            {benchPressToggle && <BenchPress />}
            {legPressToggle && <LegPress />}

        </div>
    );
}

export default Workout;