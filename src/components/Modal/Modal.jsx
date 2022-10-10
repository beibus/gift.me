import React from "react";
import Krestik from "../../image/krestik.png";
import "./Modal.css";

export const Modal = ({ active, setActive, children }) => {
	return (
		<div
			className={active ? "modal active" : "modal"}
			onClick={() => setActive(false)}
		>
			<div
				className={active ? "modal-content active" : "modal-content"}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="content">
					<div className="header-modal">
						<h4>Вход</h4>
						<img
							onClick={() => setActive(false)}
							src={Krestik}
							alt=""
						/>
					</div>
					<div>
						<p>E-mail</p>
						<input
							type="email"
							placeholder="E-mail"
							name="email"
							required
						/>
						<p></p>
						<input
							type="password"
							placeholder="Password"
							name="password"
							required
							minLength="6"
						/>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};
