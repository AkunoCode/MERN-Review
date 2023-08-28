import { createContext, useReducer } from 'react'

export const workoutContext = createContext()

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case "SETUP-WORKOUTS":
            return {
                workouts: action.payload
            }
        case "CREATE-WORKOUT":
            return {
                workouts: [action.payload, ...state.workouts]
            }
        default:
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