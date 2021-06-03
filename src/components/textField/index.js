import React from "react";
import "./style.scss";

const TextField = ({ input, label, type, step }) =>
	type !== "number" ? (
		<div className="textInput">
			<input
				className="textInput--input"
				type={type}
				placeholder={input.placeholder}
				name={input.name}
				onChange={input.onChange}
				onBlur={input.onBlur}
				required
			/>
			<span className="textInput--floatLabel">{label}</span>
		</div>
	) : (
		<div className="numberInput">
			<input
				className="numberInput--input"
				type={type}
				onChange={input.onChange}
				onBlur={input.onBlur}
				placeholder={input.placeholder}
				name={input.name}
				required
				step={step || 0}
			/>
			<span className="numberInput--floatLabel">{label}</span>
		</div>
	);

export default TextField;
