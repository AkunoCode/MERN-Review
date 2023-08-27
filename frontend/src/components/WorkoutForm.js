import { useState } from "react"
import axios from 'axios'

const URL_PATH = "http://localhost:4000/api/workouts"
const WorkoutForm = () => {
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post(URL_PATH, {
            title: title,
            load: load,
            reps: reps
        })
        setTitle("")
        setLoad("")
        setReps("")

    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <label>Load (kg):</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
            />
            <label>Reps:</label>
            <input
                type="number"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
            />

            <button>Add Workout</button>
        </form>
    )
}

export default WorkoutForm