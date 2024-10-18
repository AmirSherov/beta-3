import { createContext } from 'react'
import { globalReducer } from './helpers.js'

const context = createContext()

const initialState = {
    "darkMode" : false
}

export {
    context,
    initialState,
    globalReducer
}