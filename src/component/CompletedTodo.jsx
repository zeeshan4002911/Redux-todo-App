import React from 'react';
import { useSelector } from 'react-redux';

const CompleteTodo = () => {
	const todos = useSelector((state) =>
		state.todo.filter((todo) => todo.completed === true)
	);

	return <h4 className='mt-3'>Total complete todo: {todos.length}</h4>;
};

export default CompleteTodo;