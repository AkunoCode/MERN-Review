import { createContext, useReducer } from 'react'

export const workoutContext = createContext()

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case "SETUP-WORKOUTS":
            // return the action payload
            return {
                workouts: action.payload
            }
        case "CREATE-WORKOUT":
            // return an array containing the action payload and destructured state.workouts
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case "DELETE-WORKOUT":
            // return filtered state.workouts. If workout._id == action.payload._id then it is removed.
            return {
                workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)
            }
        default:
            // just return the state as it is
            return state
    }

}

export const WorkoutContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(workoutReducer, {
        workouts: null
    })

    return (
        <workoutContext.Provider value={{ ...state, dispatch }}>
            {children}
        </workoutContext.Provider>
    )
}