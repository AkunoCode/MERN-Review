import { useEffect } from "react"
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
            await axios.get(URL_PATH).then((response) => {
                dispatch({ type: "SETUP-WORKOUTS", payload: response.data })
            }).catch(error => {
                alert('An Error Occured With Fetching the Data')
            })
        }
        fetchWorkouts()
    }, [dispatch])

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