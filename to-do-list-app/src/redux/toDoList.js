// consider this source: https://yosracodes.hashnode.dev/creating-a-to-do-list-app-using-redux-toolkit

import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        value: []
    },

    reducers: {
        onAdd: (state, action) => {
            state.value = [...action.payload]
        },

        onDone: (state, action) => {
            let newList = [...state.value];
            newList[action.payload].isDone = !newList[action.payload].isDone;
            state.value = newList;
        },

        onDelete: (state, action) => {
            let newList = [...state.value];
            newList.splice(action.payload, 1);
            state.value = newList
        },
    },
});


export const { onAdd, onDone, onDelete } = todoSlice.actions;

export default todoSlice.reducer;