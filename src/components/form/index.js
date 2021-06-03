import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import SelectField from "../selectField";
import TextField from "../textField";
import TimeField from "../timeFiled";
import "./style.scss";

const DishForm = (props) => {
	const { handleSubmit, pristine, submitting } = props;

	const [dishType, setDishType] = useState("");
	const [slinceOfbread, setSlinceOfbread] = useState(0);
	const [noOfSlice, setNoOfSlice] = useState(0);
	const [dimeters, setDimeter] = useState(0);
	const [soupScale, setSoupScale] = useState(0);

	return (
		<form className="dishForm" onSubmit={handleSubmit}>
			<div className="dishForm--group">
				<label className="dishForm--label">Dish name:</label>
				<div>
					<Field name="name" component={TextField} type="text" label="Name" />
				</div>
			</div>
			<div className="dishForm--group">
				<label className="dishForm--label">Preparation Time ⏱</label>
				<div>
					<Field
						name="preparation_time"
						component={TimeField}
						type="text"
						required
					/>
				</div>
			</div>
			<div className="dishForm--group">
				<label className="dishForm--label">What kind of food?</label>
				<div>
					<Field
						name="type"
						onChange={(e) => setDishType(e.target.value)}
						component={SelectField}
						required
					>
						<option>Pick type...</option>
						<option value="pizza">Pizza</option>
						<option value="soup">Soup</option>
						<option value="sandwich">Sandwich</option>
					</Field>
				</div>
			</div>
			{dishType === "pizza" ? (
				<div className="dishForm--groupOfInputs">
					<div>
						<label className="dishForm--label">No of slices</label>
						<div>
							<Field
								name="no_of_slices"
								component={TextField}
								type="number"
								onChange={(e) => setNoOfSlice(e.target.value)}
								parse={(value) => parseInt(value)}
								required
							/>
						</div>
					</div>
					<div style={{ marginLeft: "35px" }}>
						<label className="dishForm--label">Diameter</label>
						<div>
							<Field
								name="diameter"
								component={TextField}
								type="number"
								onChange={(e) => setDimeter(e.target.value)}
								required
								parse={(value) => parseFloat(value)}
								step="0.1"
							/>
						</div>
					</div>
				</div>
			) : dishType === "soup" ? (
				<div className="dishForm--group">
					<label className="dishForm--label">Spiciness scale:</label>
					<div>
						<Field
							name="spiciness_scale"
							component="input"
							type="range"
							className="dishForm--rage"
							max="10"
							onChange={(e) => setSoupScale(e.target.value)}
							min="1"
							parse={(value) => parseInt(value)}
							step="1"
							required
						/>
						<span className="dishForm--label">{soupScale}</span>
					</div>
				</div>
			) : dishType === "sandwich" ? (
				<div className="dishForm--group">
					<label className="dishForm--label">No of slices</label>
					<div>
						<Field
							name="slices_of_bread"
							component={TextField}
							type="number"
							onChange={(e) => setSlinceOfbread(e.target.value)}
							parse={(value) => parseInt(value)}
							required
						/>
					</div>
				</div>
			) : null}
			<div>
				<button
					className="dishForm--button"
					type="submit"
					disabled={
						pristine ||
						submitting ||
						dishType === "" ||
						(dishType === "soup" && soupScale === 0) ||
						(dishType === "sandwich" && slinceOfbread <= 0) ||
						(dishType === "pizza" && (noOfSlice <= 0 || dimeters <= 0))
					}
				>
					Send now!
				</button>
			</div>
		</form>
	);
};

export default reduxForm({
	form: "dish",
})(DishForm);
