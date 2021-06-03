import React from "react";
import DishForm from "../components/form";
import DecoratorOne from "../assets/image/dots.svg";
import WiresDecorator from "../assets/image/wirers.svg";
import HeadText from "../components/heroTitle";
import { connect } from "react-redux";
import { cleanStatuts, createOrder } from "../services/actions";

const resetStatus = (cleanStatuts) => {
	setTimeout(() => cleanStatuts(), 5000);
};

const App = ({ error, request_status, createOrder, cleanStatuts }) => {
	return (
		<div className="Wrapper">
			{request_status === 200 ? (
				<div className="message message--success">
					{resetStatus(cleanStatuts)}
					<p className="message--text">Your request made successfully.</p>
				</div>
			) : null}
			{error || (request_status !== 200 && request_status) ? (
				<div className="message message--error">
					{resetStatus(cleanStatuts)}
					<p className="message--text">Request failed. ! 🪲</p>
				</div>
			) : null}
			<div className="Container">
				<HeadText>
					Made by{" "}
					<span>
						<a href="https://www.linkedin.com/in/szymon-jarmuszczak-8138a11b6/">
							👨🏻‍💻
						</a>
					</span>
				</HeadText>
				<DishForm
					handleSubmit={(value) => {
						createOrder();
						value.preventDefault();
					}}
				/>
			</div>
			<img
				style={{
					width: "40%",
					height: "auto",
					position: "absolute",
					right: "-200px",
					bottom: "-20%",
					overflow: "hidden",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
				alt="decoration"
				src={DecoratorOne}
			/>
			<img
				style={{
					width: "28rem",
					height: "auto",
					position: "absolute",
					right: "0",
					top: "-15rem",
					overflow: "hidden",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
				alt="decoration"
				src={WiresDecorator}
			/>
			<p
				style={{
					textSize: "17px",
					position: "absolute",
					bottom: "0",
					left: "15px",
				}}
			>
				@Szymon Jarmuszczak - HexOcean recruitment
			</p>
		</div>
	);
};

const mapStateToProps = (state) => ({
	error: state.actionReducer.error,
	request_status: state.actionReducer.request_status,
});

const mapDispatchToProps = (dispatch) => ({
	createOrder: async () => {
		await dispatch(createOrder());
	},
	cleanStatuts: async () => {
		await dispatch(cleanStatuts());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
