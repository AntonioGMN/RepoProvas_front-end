import styled from "styled-components";

export default function Search({ tests }) {
	return (
		<SearchStyle>
			<input placeholder={tests}></input>
		</SearchStyle>
	);
}

const SearchStyle = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 20px 0 10px 0;

	input {
		width: 440px;
		height: 30px;
	}
`;
