import styled from "styled-components";

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;

	font-family: Poppins;
	font-size: 12px;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.15000000596046448px;
	text-align: left;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
	}

	a {
		color: #4673cacc;
	}

	/* button {
		height: 36px;
		width: 88px;
		border-radius: 4px;
		border: none;
		background: #1976d2;
		color: #fff;

		font-family: Roboto;
		font-size: 14px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0.4000000059604645px;
	} */
`;

export const Input = styled.input`
	height: 30px;
	border: 1px solid gray;
	border-radius: 5px;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
	padding-left: 12px;

	font-family: Poppins;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	letter-spacing: 0.15000000596046448px;
	text-align: left;
`;
