import {createSlice} from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    'name': 'tasks',
    'initialState': {
        'toDo': [
            {
                'id': new Date(),
                'description': 'Найти сука наконец работу',
                'date_completion': '2024-05-01',
                'done': false,
            },
            {
                'id': new Date('2024-06-01'),
                'description': 'Найти сука наконец работу 2',
                'date_completion': '2024-06-01',
                'done': true,
            },
        ],
    },
    'reducers': {
        'addTasks': (state, action) => {
            state.toDo.push(action.payload)
        },
        'removeTask': (state, action) => {
            state.toDo.slice(state.toDo.indexOf(action.payload.id), 1)
        },
    },
})

export const {
    addTasks,
    removeTask,
} = tasksSlice.reducer

export default tasksSlice.reducer
