const Checkbox = ({ filter }) => {
	return (
		<label class="container">
			{filter.technologyName}
			<input type="checkbox" />
			<span class="checkmark"></span>
		</label>
	);
};

export { Checkbox };
