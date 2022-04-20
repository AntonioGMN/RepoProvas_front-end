import styled from "styled-components";
import logo from "./logo.png";

export default function Logo() {
	return (
		<LogoStyled>
			<img src={logo} alt="erro" />
		</LogoStyled>
	);
}

const LogoStyled = styled.div`
	width: 292px;
	height: 63.5px;
`;
