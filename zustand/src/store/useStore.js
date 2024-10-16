import {create} from "zustand";

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

const useStore = create((set) => ({
    todos: initialState,
    create: (id, content) => set((state) => ({
        todos: [
            ...state.todos,
            {id: id, content: content, isDone: false, date: new Date().getTime(),}
        ]
    })),
    update: (id) => set((state) => ({
        todos: state.todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
    })),
    deleteTodo: (id) => set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
    })),
}))

export default useStore;

