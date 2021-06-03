import React from "react";
import "./style.scss";

const TimeField = ({ input }) => (
	<div className="time">
		<input
			className="time--input"
			typename={input.name}
			type="time"
			step="1"
			onChange={input.onChange}
			onBlur={input.onBlur}
			required
			name={input.name}
		/>
	</div>
);
export default TimeField;
