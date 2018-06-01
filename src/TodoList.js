import React from "react";

const TodoList = ({ todos }) => {
	return <ul>{todos.map((t, i) => <li key={i}>{t.nombre}</li>)}</ul>;
};

export default TodoList;
