import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";

import Header from "../components/hearder";
import Search from "../components/search";
import MainStyle from "../components/mainStyle";
import SimpleAccordion from "../components/accordion";
import Column from "../components/column";
import Position from "../components/position";

import * as apiTerms from "../services/termsApiService";
import * as apiDisciplines from "../services/disciplinesApiService";
import * as apiCategories from "../services/categoriesApiService";
import * as apiTests from "../services/testsApiService";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ProvasPage() {
	const [terms, setTerms] = useState(null);
	const [disciplines, setDisciplines] = useState(null);
	const [categories, setCategories] = useState(null);
	const [tests, setTests] = useState(null);
	const { token } = useAuth();
	const navegate = useNavigate();

	function getTerms() {
		apiTerms
			.getTerms(token)
			.then((response) => {
				setTerms(response.data);
			})
			.catch((error) => alert(error));
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
	function getTests() {
		apiTests
			.getTests(token)
			.then((response) => {
				setTests(response.data);
			})
			.catch((error) => alert(error));
	}

	useEffect(() => {
		if (!token) navegate("/login");
		getTerms();
		getDisciplines();
		getCategories();
		getTests();
	}, []);

	return (
		<Column>
			<Header>
				{disciplines !== null && (
					<Search
						date={disciplines}
						setDate={setDisciplines}
						tests={"Pesquise por disciplina"}
					/>
				)}
			</Header>
			<MainStyle>
				<Position>
					<Stack
						marginBottom={"10px"}
						justifyContent="space-between"
						direction="row"
					>
						<Button variant="contained">Disciplinas</Button>
						<Button variant="outlined" onClick={() => navegate("/teachers")}>
							pessoa instrutora
						</Button>
						<Button variant="outlined">adicionar</Button>
					</Stack>
					{terms == null ||
					disciplines == null ||
					categories == null ||
					tests == null ? (
						"carregando"
					) : (
						<SimpleAccordion
							terms={terms}
							disciplines={disciplines}
							categories={categories}
							tests={tests}
						/>
					)}
				</Position>
			</MainStyle>
		</Column>
	);
}
