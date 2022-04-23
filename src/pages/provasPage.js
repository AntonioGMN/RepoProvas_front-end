import Header from "../components/hearder";
import Centralize from "../components/centralize";
import Container from "../components/conteiner";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import MainStyle from "../components/mainStyle";
import SimpleAccordion from "../components/accordion";
import * as api from "../services/termsApiService";

import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ProvasPage() {
	const [terms, setTerms] = useState(null);
	const { token } = useAuth();
	const navegate = useNavigate();

	function getTerms() {
		api
			.getTerms(token)
			.then((response) => {
				setTerms(response.data);
				return;
			})
			.catch((error) => alert(error));
	}

	useEffect(() => {
		if (!token) navegate("/login");
		getTerms();
	}, []);

	return (
		<Centralize>
			<Header />
			<MainStyle>
				<Stack justifyContent="space-between" direction="row">
					<Button variant="contained">Disciplinas</Button>
					<Button variant="outlined">pessoa instrutora</Button>
					<Button variant="outlined">adicionar</Button>
				</Stack>
				{terms !== null ? <SimpleAccordion obj={terms} /> : "carregando"}
			</MainStyle>
		</Centralize>
	);
}
