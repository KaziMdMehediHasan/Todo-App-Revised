import { TTask } from '../../components/Todo/TodoModal'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TReduxInitialState = {
    todos: TTask[]
}
const initialState: TReduxInitialState = {
    todos: []
}
export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTask>) => {
            state.todos.push(action.payload)
        },
        updateStatus: (state, action) => {
            const selectedTask = state.todos.find((todo) => todo.id === action.payload.id);
            if (selectedTask) {
                selectedTask.isCompleted = action.payload.value
            }

        }
    },
})

// Action creators are generated for each case reducer function
export const { addTodo, updateStatus } = todoSlice.actions

export default todoSlice.reducer