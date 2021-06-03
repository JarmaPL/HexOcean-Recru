import React from "react";
import "./style.scss";

const SelectField = ({ input, children }) => (
	<div className="box">
		<select
			onChange={input.onChange}
			name={input.name}
			required={input.required}
		>
			{children}
		</select>
	</div>
);
export default SelectField;
