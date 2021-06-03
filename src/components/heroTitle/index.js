import React from "react";
import "./style.scss";

const HeadText = ({ children }) => (
	<div className="hero--wrapper">
		<h1 className="hero--tittle">{children}</h1>
	</div>
);

export default HeadText;
