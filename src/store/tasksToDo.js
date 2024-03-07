import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    'name': 'tasks',
    'initialState': {
        'toDo': [
            {
                'id': '1',
                'title': 'Найти, сука, наконец работу',
                'description': 'Интересную и перспективную работу с возможностью развития',
                'date_completion': '2024-05-01',
                'done': false,
            },
            {
                'id': '2',
                'title': 'Заняться своим здоровьем',
                'description': 'Минимизировать вредне привычки, номализировать вес, сделать проверку всего организма',
                'date_completion': '2024-06-01',
                'done': true,
            },
            {
                'id': '3',
                'title': 'Complete a test task',
                'description': 'Do everything perfectly to get this job',
                'date_completion': '2024-03-07',
                'done': true,
            },
        ],
    },
    'reducers': {
        'addTasks': (state, action) => {
            state.toDo.push(action.payload)
        },
        'removeTask': (state, action) => {
            const index = state.toDo.findIndex((task) => task.id === action.payload.id)
            if (index !== -1) {
                state.toDo.splice(index, 1);
            }
        },
        'editTask': (state, action) => {
            const index = state.toDo.findIndex((task) => task.id === action.payload.id)
            if (index !== -1) {
                state.toDo.splice(index, 1, action.payload.task);
            }
        },
        'performTask': (state, action) => {
            const index = state.toDo.findIndex((task) => task.id === action.payload.id)
            if (index !== -1) {
                state.toDo[index] = { ...state.toDo[index], 'done': !state.toDo[index].done }
            }
        },
    },
})

export const {
    addTasks,
    removeTask,
    performTask,
    editTask,
} = tasksSlice.actions

export default tasksSlice.reducer
