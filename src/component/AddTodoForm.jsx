import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === '') return;
        dispatch(addTodo({ title: value }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="input">Input: </label>
            <input type="text" placeholder="Type Here...." value={value} onChange={e => setValue(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddTodo;