import axios from "axios"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const URL_PATH = 'http://localhost:4000/api/workouts/'

const WorkoutDetails = ({ workout }) => {

    const { dispatch } = useWorkoutContext()

    // When clicked, send a DELETE request to server and upon success dispatch DELETE-WORKOUT
    const handleClick = async () => {
        const response = await axios.delete(`${URL_PATH}${workout._id}`)
        if (response.status === 200) {
            dispatch({ type: "DELETE-WORKOUT", payload: response.data })
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <h4><strong>Load (kg):</strong> {workout.load}</h4>
            <h4><strong>Reps:</strong> {workout.load}</h4>
            <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails