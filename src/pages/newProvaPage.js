import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

import Header from "../components/hearder";
import MainStyle from "../components/mainStyle";
import Column from "../components/column";
import Position from "../components/position";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Form, Input } from "../components/form";
import AutoComplete from "../components/autoComplite";

import * as apiDisciplines from "../services/disciplinesApiService";
import * as apiCategories from "../services/categoriesApiService";
import * as apiTeachers from "../services/teachersApiService";
import * as apiTests from "../services/testsApiService";

export default function AdicionarProvaPage() {
	const { token } = useAuth();
	const navegate = useNavigate();
	const [disciplines, setDisciplines] = useState(null);
	const [categories, setCategories] = useState(null);
	const [teachers, setTeachers] = useState(null);
	const [prova, setProva] = useState({
		name: "",
		pdfUrl: "",
		category: "",
		discipline: "",
		teacher: "",
	});

	function handlerInput(e) {
		setProva({ ...prova, [e.target.name]: e.target.value });
	}

	async function hadlerSubmit(e) {
		e.preventDefault();

		apiTests
			.create(prova, token)
			.then((resp) => {
				alert("create");
			})
			.catch((error) => alert(error));

		return;
	}

	function getDisciplines() {
		apiDisciplines
			.getDisciplines(token)
			.then((response) => {
				setDisciplines(response.data);
			})
			.catch((error) => alert(error));
	}
	function getCategories() {
		apiCategories
			.getCategories(token)
			.then((response) => {
				setCategories(response.data);
			})
			.catch((error) => alert(error));
	}
	function getTeachers() {
		apiTeachers
			.getTeachers(token)
			.then((response) => {
				setTeachers(response.data);
			})
			.catch((error) => alert(error));
	}

	useEffect(() => {
		if (!token) navegate("/login");
		getTeachers();
		getDisciplines();
		getCategories();
	}, []);

	return (
		<Column>
			<Header>
				<h1>Adicioner uma prova</h1>
			</Header>
			<MainStyle>
				<Position>
					<Stack
						marginBottom={"10px"}
						justifyContent="space-between"
						direction="row"
					>
						<Button variant="outlined" onClick={() => navegate("/")}>
							Disciplinas
						</Button>
						<Button variant="outlined" onClick={() => navegate("/teachers")}>
							pessoa instrutora
						</Button>
						<Button variant="contained">adicionar</Button>
					</Stack>
					{disciplines && categories && teachers ? (
						<>
							<Form>
								<Input
									value={prova.name}
									name="name"
									placeholder="Titulo da prova"
									onChange={(e) => handlerInput(e)}
								/>
								<Input
									value={prova.pdfUrl}
									name="pdfUrl"
									placeholder="PDF da prova"
									onChange={(e) => handlerInput(e)}
								/>
								<AutoComplete
									option={categories}
									title={"Categoria"}
									date={prova}
									setDate={setProva}
								/>
								<AutoComplete
									option={disciplines}
									title={"Disciplina"}
									date={prova}
									setDate={setProva}
								/>
								<AutoComplete
									option={teachers}
									title={"Pessoa Instrutora"}
									date={prova}
									setDate={setProva}
								/>
							</Form>
							<Button
								onClick={(e) => hadlerSubmit(e)}
								variant="contained"
								sx={{ width: "100%", marginTop: 1 }}
							>
								Enviar
							</Button>
						</>
					) : (
						"Carregando"
					)}
				</Position>
			</MainStyle>
		</Column>
	);
}
