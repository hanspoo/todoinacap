import React from "react";
import { Form, Button } from "semantic-ui-react";

export default class NewTodoForm extends React.Component {
	state = { tarea: "" };

	onChange = evento => {
		this.setState({ tarea: evento.target.value });
	};

	onClick = evt => {
		console.log("onclick", this.state.tarea);
		this.props.agregarTodo(this.state.tarea);
		this.setState({ tarea: "" });
	};

	render() {
		return (
			<Form>
				<Form.Input
					onChange={this.onChange}
					value={this.state.tarea}
					placeholder="Ingresa la tarea..."
				/>
				<Button content="Agregar" onClick={this.onClick} />
			</Form>
		);
	}
}
