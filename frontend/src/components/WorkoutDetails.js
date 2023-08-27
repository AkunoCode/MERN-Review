const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <h4><strong>Load (kg):</strong> {workout.load}</h4>
            <h4><strong>Reps:</strong> {workout.load}</h4>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails