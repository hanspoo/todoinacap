import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";

const SearchBar = ({ title, onChange }) => (
	<div>
		<h2>{title || "Barra de búsqueda"}</h2>
		<Form>
			<Form.Input onChange={({ target }) => onChange(target.value)} />
		</Form>
	</div>
);

SearchBar.propTypes = {
	title: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default SearchBar;
