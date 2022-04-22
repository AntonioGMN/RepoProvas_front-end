import Logo from "../components/logo";
import Container from "../components/conteiner";
import Centralize from "../components/centralize";
import ButtonGit from "../components/buttonGit";
import SeparatorLine from "../components/separatorLine";
import { Form, Input } from "../components/form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as api from "../services/apiService";
import { useAuth } from "../contexts/AppContext";

export default function LoginPage() {
	const { token, manterLogin } = useAuth();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});

	const navegate = useNavigate();

	function handlerInput(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		const user = {
			email: formData.email,
			password: formData.password,
		};

		api
			.login(user)
			.then((resp) => {
				const { token } = resp.data;
				console.log(token);
				manterLogin(token);
			})
			.catch((error) => alert(error));

		return;
	}

	return (
		<Centralize>
			<Logo />
			<Container>
				<h2>Login</h2>
				<ButtonGit>Entrar com o GITHUB</ButtonGit>
				<SeparatorLine />
				<Form onSubmit={hadlerSubmit}>
					<Input
						type="email"
						placeholder="Email"
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
					></Input>
					<Input
						type="password"
						placeholder="Senha"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
					></Input>
					<div>
						<Link to="/cadastro">Não possuo cadastro</Link>
						<button>ENTRAR</button>
					</div>
				</Form>
			</Container>
		</Centralize>
	);
}
