const Checkbox = ({
	filter,
	onChangeFunction,
	setChosenTechnologies,
	chosenTechnologies,
}) => {
	return (
		<label className="container">
			{filter.technologyName}
			<input
				type="checkbox"
				checked={chosenTechnologies.includes(filter.technologyName)}
				onChange={() => onChangeFunction(filter.technologyName)}
			/>
			<span className="checkmark"></span>
		</label>
	);
};

export { Checkbox };
