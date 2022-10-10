import React from "react";
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

            </div>
			Modal
			{children}
		</div>
	);
};
