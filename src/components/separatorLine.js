import styled from "styled-components";

const SeparatorLine = styled.hr`
	width: 100%;
	border: none;
	border-top: 1px solid #ccc;
	height: 10px;
	overflow: visible;
	color: #ccc;
	text-align: center;

	::after {
		content: "ou";
		display: inline-block;
		position: relative;
		top: -1.1em;
		font-size: 15px;
		padding: 0 0.3em;
		background: white;
		font-family: "Poppins";
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 24px;
	}
`;

export default SeparatorLine;
