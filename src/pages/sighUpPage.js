import Logo from "../components/logo";
import Container from "../components/conteiner";
import Centralize from "../components/centralize";
import ButtonGit from "../components/buttonGit";
import SeparatorLine from "../components/separatorLine";
import { Form, Input } from "../components/form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as api from "../services/apiService";
import { Button } from "@mui/material";

export default function SighUpPage() {
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

		if (formData.password !== formData.confirmPassword) {
			alert("As senha são diferentes");
			return;
		}

		const user = {
			email: formData.email,
			password: formData.password,
		};

		api
			.sighUp(user)
			.then(() => {
				navegate("/login");
			})
			.catch((error) => alert(error));

		return;
	}

	return (
		<Centralize>
			<Logo />
			<Container>
				<h2>Cadastro</h2>
				<ButtonGit>Entrar com o GITHUB</ButtonGit>
				<SeparatorLine />
				<Form onSubmit={hadlerSubmit}>
					<Input
						id="email"
						type="email"
						placeholder="Email"
						name="email"
						value={formData.email}
						onChange={(e) => handlerInput(e)}
					/>
					<Input
						id="password"
						type="password"
						placeholder="Senha"
						name="password"
						value={formData.password}
						onChange={(e) => handlerInput(e)}
					/>
					<Input
						id="confirmePassword"
						type="password"
						placeholder="Confirme sua senha"
						name="confirmPassword"
						value={formData.confirmPassword}
						onChange={(e) => handlerInput(e)}
					/>
					<div>
						<Link to="/login">Já possuo cadastro</Link>
						<Button variant="contained" type="submit">
							CADASTRAR
						</Button>
					</div>
				</Form>
			</Container>
		</Centralize>
	);
}
