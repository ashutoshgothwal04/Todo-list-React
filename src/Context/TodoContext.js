import { useContext, createContext } from 'react'

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'todo msg',
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
})

export const useTodo = () => {
    return useContext(TodoContext)  //useContext hook to access the context
}

export const Todoprovider = TodoContext.Provider