import React, { useState } from 'react';
import { Workout } from './activity/workout';
import { Sports } from './activity/sports';
import arm from './img/arm.png';
import './styles/styles.css'; // Import your CSS file

export function Home() {
    const [workoutToggle, setWorkoutToggle] = useState(false);
    const [sportsToggle, setSportsToggle] = useState(false);

    return (
        <div>
            <div class="title-image">
                <img src={arm} alt="GymByte" width="117.5" height="160" />
                <h1>GymByte</h1>
            </div>
            <h2>Want to make your workout more interactive?</h2>
            <h3>THANK YOU FOR COMING TO THE CRC TODAY!</h3>
            <h4>If you would like some insight on your workout for today please fill this out after each workout or fill it out once you finish your workout.</h4>

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
        </div>
    );
}

export default Home;
