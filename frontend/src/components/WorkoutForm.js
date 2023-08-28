import { useState } from "react"
import axios from 'axios'
import { useWorkoutContext } from "../hooks/useWorkoutContext"

const URL_PATH = "http://localhost:4000/api/workouts"
const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext()
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(URL_PATH, {
            title: title,
            load: load,
            reps: reps
        }).then((response) => {
            setTitle("")
            setLoad("")
            setReps("")
            setError(null)
            setEmptyFields([])
            dispatch({ type: "CREATE-WORKOUT", payload: response.data })
        }).catch(error => {
            console.log("REACHED THE ELSE")
            setError(error.response.data.error)
            setEmptyFields(error.response.data.emptyFields)
        })
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? "error" : ""}
            />
            <label>Load (kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                className={emptyFields.includes('load') ? "error" : ""}
            />
            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                className={emptyFields.includes('reps') ? "error" : ""}
            />

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm