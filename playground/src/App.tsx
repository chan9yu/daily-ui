import React from "react";
import styled from "styled-components";

import { Button } from "@rsup/design";
import "@rsup/styles/build/button.css";

const ButtonStyle = styled(Button)`
	font-size: 50px;
	background-color: crimson;
	/* background-color: royalblue; */
`;

const App = () => {
	return <ButtonStyle>test</ButtonStyle>;
};

export default App;
