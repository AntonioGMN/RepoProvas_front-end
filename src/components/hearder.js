import styled from "styled-components";
import Logo from "./logo";
import { IoLogOutOutline as LogoutIcon } from "react-icons/io5";
import { useAuth } from "../contexts/AppContext";
import * as api from "../services/apiService";
import { useNavigate } from "react-router-dom";

export default function Header() {
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
			<input />
			<hr />
		</HeaderStyle>
	);
}

const HeaderStyle = styled.header`
	width: 100%;
	flex-direction: column;

	img {
		width: 230px;
		height: 64px;
	}

	div {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	input {
		width: 230px;
		align-self: center;
		border: none;
		border-radius: 3px;
	}

	hr {
		width: 100%;
		border: none;
		border-top: 1px solid #c4c4c4;
	}
`;
