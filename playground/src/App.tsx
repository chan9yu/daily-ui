import React from "react";
import styled from "styled-components";
import emotion from "@emotion/styled";

import { Button } from "@rsup/design";
import "@rsup/styles/build/button.css";

const EmotionStyle = emotion(Button)`
	font-size: 50px;
	background-color: crimson;
	/* background-color: royalblue; */
`;

const ButtonStyled = styled(Button)`
	font-size: 50px;
	/* background-color: crimson; */
	background-color: royalblue;
`;

const App = () => {
	return (
		<>
			<EmotionStyle>emotion</EmotionStyle>
			<br />
			<br />
			<ButtonStyled>styled</ButtonStyled>
		</>
	);
};

export default App;
