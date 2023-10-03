import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './toDoList'

export const store = configureStore({
    reducer: {
        todo: todoSlice,
    }
})

