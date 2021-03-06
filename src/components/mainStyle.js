import styled from "styled-components";

const MainStyle = styled.main`
	height: 248px;
	width: 700px;
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: relative;

	@media (max-width: 800px) {
		width: 100vw;
	}
`;

export default MainStyle;
