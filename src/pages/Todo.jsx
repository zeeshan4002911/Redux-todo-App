import AddTodo from "../component/AddTodoForm";
import TodoList from "../component/TodoList";
import CompleteTodo from "../component/CompletedTodo";

const Todo = () => {
    return (
        <div id="Todo">
            < CompleteTodo />
            < AddTodo />
            < TodoList />
        </div>
    )
}

export default Todo;