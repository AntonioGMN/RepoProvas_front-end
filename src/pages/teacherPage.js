import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import * as apiCategories from "../services/categoriesApiService";
import * as apiTeachers from "../services/teachersApiService";

import MainStyle from "../components/mainStyle";
import Header from "../components/hearder";
import Search from "../components/search";
import Column from "../components/column";
import Position from "../components/position";
import TeachersAccordion from "../components/teacherAccordion";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function TeachersPage() {
	const [teachers, setTeachers] = useState(null);
	const [categories, setCategories] = useState(null);
	const { token } = useAuth();
	const navegate = useNavigate();

	function getTeachers() {
		apiTeachers
			.getTeachers(token)
			.then((response) => {
				setTeachers(response.data);
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

	useEffect(() => {
		if (!token) navegate("/login");
		getCategories();
		getTeachers();
	}, []);

	return (
		<Column>
			<Header>
				{teachers !== null && (
					<Search
						date={teachers}
						setDate={setTeachers}
						tests={"Pesquise por pessoa instrutora"}
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
						<Button
							variant="outlined"
							onClick={() => {
								navegate("/");
							}}
						>
							Disciplinas
						</Button>
						<Button variant="contained">pessoa instrutora</Button>
						<Button variant="outlined" onClick={() => navegate("/provas/adicionar")}>
							adicionar
						</Button>
					</Stack>
					{categories == null || teachers == null ? (
						"carregando"
					) : (
						<TeachersAccordion teachers={teachers} categories={categories} />
					)}
				</Position>
			</MainStyle>
		</Column>
	);
}
