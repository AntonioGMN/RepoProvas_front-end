import styled from "styled-components";

const Container = styled.section`
	width: 464px;
	min-height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	h2 {
		font-family: Poppins;
		font-size: 24px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0.15000000596046448px;
		text-align: left;
	}

	@media (max-width: 800px) {
		width: 100vw;
	}
`;

export default Container;
