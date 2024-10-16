import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        isDone: false,
        content: "React Study",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "Kotlin Study",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "Android Study",
        date: new Date().getTime(),
    },
]

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        create: (state, action) => {
            const newTodo = {
                id: action.payload.id,
                isDone: false,
                content: action.payload.content,
                date: new Date().getTime(),
            }
            state.unshift(newTodo);
        },
        update: (state, action) => {
            const todo = state.find((item) => item.id === action.payload)
            if (todo) {
                todo.isDone = !todo.isDone
            }
        },
        deleteTodo: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
    }
})

export const {create, update, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;
