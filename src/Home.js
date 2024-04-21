import React, { useState } from 'react';
import { Workout } from './activity/workout';
import { Sports } from './activity/sports';

export function Home() {
    const [workoutToggle, setWorkoutToggle] = useState(false);
    const [sportsToggle, setSportsToggle] = useState(false);

    return (
        <div>
            <h1>Wanna make your workout more interactive?</h1>
            <h2>THANK YOU FOR COMING TO THE CRC TODAY!</h2>
            <h3>If you would like some insight on your workout for today please fill this out after each workout or fill it out once you finish your workout.</h3>

            <hr></hr>

            <form>
                <p>Are you here for a workout or to play sports?</p>

                <input
                    type="radio"
                    name="activity"
                    value={workoutToggle}
                    onChange={() => { setWorkoutToggle(true); setSportsToggle(false); }}
                />
                <label>Workout</label>

                <input
                    type="radio"
                    name="activity"
                    value={sportsToggle}
                    onChange={() => { setWorkoutToggle(false); setSportsToggle(true); }}
                />
                <label>Sports</label>
            </form>

            {
                workoutToggle
                &&
                <Workout />
            }

            {
                sportsToggle
                &&
                <Sports />
            }



            {/* treadmill: speed, time */}
            {/* bench press: reps, sets, weight */}
            {/* leg press: reps, sets, weight */}
        </div>
    );
}

export default Home;
