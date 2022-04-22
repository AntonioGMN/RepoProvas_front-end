import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroPage from "./pages/Cadastro/CadastroPage";
import LoginPage from "./pages/loginPage";
import Context from "./contexts/AppContext";
import { useState } from "react";

export default function App() {
	const persistedToken = JSON.parse(localStorage.getItem("token"));
	const [token, setToken] = useState(persistedToken);

	function manterLogin(novoToken) {
		setToken(novoToken);
		localStorage.setItem("token", JSON.stringify(novoToken));
	}

	async function deslogar() {
		localStorage.clear();
		window.location.replace("/login");
	}

	return (
		<Context.Provider value={{ token, manterLogin, deslogar }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/cadastro" element={<CadastroPage />} />
				</Routes>
			</BrowserRouter>
		</Context.Provider>
	);
}
