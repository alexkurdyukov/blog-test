const Checkbox = ({ element, onChangeFunction }) => {
	return (
		<label onChange={onChangeFunction} className="container">
			{element.technologyName}
			<input type="checkbox" />
			<span className="checkmark"></span>
		</label>
	);
};

export { Checkbox };
