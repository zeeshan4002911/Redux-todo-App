import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ data }) => {
    const dispatch = useDispatch();
    const handleCheckBox = () => {
        dispatch(toggleComplete({ id: data.id, completed: !data.completed }));
    }
    const handleDelete = () => {
        dispatch(deleteTodo({ id: data.id }))
    }
    return (
        <li className="todo-block">
            <input type="checkbox" checked={data.completed} onChange={handleCheckBox} />
            <div>{data.title}</div>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default TodoItem;