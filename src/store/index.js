import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksToDo.js'

export const store = configureStore({
    'reducer': {
        'tasks': tasksReducer,
    },
})
