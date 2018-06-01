import React from "react";
import { Segment } from "semantic-ui-react";

import SearchBar from "./SearchBar";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import "semantic-ui-css/semantic.min.css";

export default class MyApp extends React.Component {
	state = {
		text: "",
		todos: [
			{ id: 1, nombre: "Estudiar React", listo: false },
			{ id: 2, nombre: "Leer un libro", listo: false },
			{ id: 3, nombre: "Cortar el pasto", listo: true }
		]
	};

	onChange = text => {
		this.setState({ text: text.toLowerCase() });
	};

	agregarTodo = nombre => {
		console.log("nombre es", nombre);
		const todos = this.state.todos.concat({
			id: this.state.todos.length + 1,
			nombre,
			listo: false
		});

		this.setState({ todos });
	};
	render() {
		const { todos, text } = this.state;

		const list = text
			? todos.filter(t => t.nombre.toLowerCase().indexOf(text) != -1)
			: todos;
		return (
			<Segment>
				<SearchBar title="Barra de búsqueda" onChange={this.onChange} />
				<TodoList todos={list} />
				<NewTodoForm agregarTodo={this.agregarTodo} />
			</Segment>
		);
	}
}
