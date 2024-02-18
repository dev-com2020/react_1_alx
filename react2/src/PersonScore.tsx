import { useEffect, useReducer, useState } from "react"
import { getPerson } from "./getPerson"
import { act } from "react-dom/test-utils"

type State = {
    name: string | undefined
    score: number
    loading: boolean
}

type Action =
    | {
        type: 'initialize'
        name: string
    }
    | {
        type: 'incement'
    }
    | {
        type: 'decrement'
    }
    | {
        type: 'reset'
    }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'initialize':
            return { name: action.name, score: 0, loading: false }
        case 'incement':
            return { ...state, score: state.score + 1 }
        case 'decrement':
            return { ...state, score: state.score - 1 }
        case 'reset':
            return { ...state, score: 0 }
        default:
            return state
    }
}

export function PersonScore() {
    const [{ name, score, loading }, dispatch] = useReducer(
        reducer,
        {
            name: undefined,
            score: 0,
            loading: true
        }
    )
    useEffect(() => {
        getPerson().then(({ name }) =>
            dispatch({ type: 'initialize', name })
        )
    }, [])
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <h3>
                {name}, {score}
            </h3>
            <button onClick={() => dispatch({ type: 'incement' })}>Add</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Substract</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}