import { useEffect, useState } from "react"
import axios from 'axios'

// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from "../hooks/useWorkoutContext"


const URL_PATH = 'http://localhost:4000/api/workouts/'
const Home = () => {
    const { workouts, dispatch } = useWorkoutContext()

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await axios.get(URL_PATH)
            if (response.status === 200) {
                dispatch({ type: "SETUP-WORKOUTS", payload: response.data })
            }
        }
        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />

        </div>
    )
}

export default Home