import styled from "styled-components";
import Logo from "./logo";
import { IoLogOutOutline as LogoutIcon } from "react-icons/io5";
import { useAuth } from "../contexts/AppContext";
import * as api from "../services/apiService";
import { useNavigate } from "react-router-dom";

export default function Header({ children }) {
	const { token } = useAuth();
	const navegate = useNavigate();

	function logout() {
		api
			.logout(token)
			.then(() => {
				localStorage.clear();
				navegate("/login");
			})
			.catch(() => alert("error on logout"));
	}

	return (
		<HeaderStyle>
			<div>
				<Logo />
				<LogoutIcon onClick={() => logout()} style={{ fontSize: "2em" }} />
			</div>
			{children}
			<hr></hr>
		</HeaderStyle>
	);
}

const HeaderStyle = styled.header`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: column;

	img {
		width: 230px;
		height: 61px;
	}

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	hr {
		width: 100%;
		border: none;
		border-top: 1px solid #c4c4c4;
	}

	h1 {
		font-family: Poppins;
		font-size: 24px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0.15000000596046448px;
		text-align: center;
	}
`;
