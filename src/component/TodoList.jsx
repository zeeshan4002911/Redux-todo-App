import { useSelector, useDispatch } from "react-redux"
import TodoItem from "./TodoItem"
import { useEffect } from "react";
import { getTodosAsync } from "../redux/todoSlice";

const TodoList = () => {
    const todos = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <ul>
            {todos.map((todo) => (
                < TodoItem key={todo.id} data={todo} />
            ))}
        </ul>
    )
}

export default TodoList;