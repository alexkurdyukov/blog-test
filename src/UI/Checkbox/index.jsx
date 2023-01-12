const Checkbox = ({
	filter,
	onChangeFunction,
	setChosenTechnologies,
	chosenTechnologies,
}) => {
	return (
		<label onChange={() => onChangeFunction(filter)} className="container">
			{filter.technologyName}
			<input type="checkbox" />
			<span className="checkmark"></span>
		</label>
	);
};

export { Checkbox };
