import React, { FC } from "react";

interface ButtonProps {
	label: string;
}

const Button: FC<ButtonProps> = ({ label }) => {
	return <button className="rsup-button__container">{label}</button>;
};

export default Button;
