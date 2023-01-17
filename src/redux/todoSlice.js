import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "./InitialTodo";

export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        return { todos: data };
    }
);

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const new_todo = {
                id: new Date(),
                title: action.payload.title,
                completed: false
            }
            state.push(new_todo);
        },
        toggleComplete: (state, action) => {
            const idx = state.findIndex((todo) => todo.id === action.payload.id);
            state[idx].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        }
    },
    extraReducers: {
        [getTodosAsync.fulfilled]: (state, action) => {
            console.log("yo", action)
            return action.payload.todos.concat(state);
        }
    }
})

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;