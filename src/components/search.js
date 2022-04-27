import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Search({ tests, date, setDate }) {
	const [searchDate, setSearchDate] = useState("");
	const [originalDate, setOriginalDate] = useState(date);

	useEffect(() => {
		if (searchDate !== "") {
			const searchResoute = date.filter((item) => {
				return item.name.toLowerCase().includes(searchDate.toLowerCase());
			});

			if (searchResoute !== null) setDate(searchResoute);
		} else setDate(originalDate);
	}, [searchDate]);

	return (
		<SearchStyle>
			<input
				placeholder={tests}
				value={searchDate}
				onChange={(e) => setSearchDate(e.target.value)}
			></input>
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
