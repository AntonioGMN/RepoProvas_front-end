import Logo from "../components/logo";
import Container from "../components/conteiner";
import Centralize from "../components/centralize";
import ButtonGit from "../components/buttonGit";
import SeparatorLine from "../components/separatorLine";
import { Form, Input } from "../components/form";
import { Link } from "react-router-dom";

export default function LoginPage() {
	return (
		<Centralize>
			<Logo />
			<Container>
				<h2>Login</h2>
				<ButtonGit>Entrar com o GITHUB</ButtonGit>
				<SeparatorLine />
				<Form>
					<Input placeholder="Email"></Input>
					<Input placeholder="Senha"></Input>
					<div>
						<Link to="/cadastro">Não possuo cadastro</Link>
						<button>ENTRAR</button>
					</div>
				</Form>
			</Container>
		</Centralize>
	);
}
