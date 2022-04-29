import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SighUpPage from "./pages/sighUpPage";
import ProvasPage from "./pages/provasPage";
import Context from "./contexts/AppContext";
import TeachersPage from "./pages/teacherPage";
import { useState } from "react";
import AdicionarProvaPage from "./pages/newProvaPage";

export default function App() {
	const persistedToken = JSON.parse(localStorage.getItem("token"));
	const [token, setToken] = useState(persistedToken);

	function persistLogin(novoToken) {
		setToken(novoToken);
		localStorage.setItem("token", JSON.stringify(novoToken));
	}

	async function logout() {
		localStorage.clear();
		window.location.replace("/login");
	}

	function vadadateToken() {
		const persistedToken = JSON.parse(localStorage.getItem("token"));
		if (!persistedToken) window.location.replace("/login");
	}

	return (
		<Context.Provider value={{ token, persistLogin, logout, vadadateToken }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProvasPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/sighUp" element={<SighUpPage />} />
					<Route path="/teachers" element={<TeachersPage />} />
					<Route path="/provas/adicionar" element={<AdicionarProvaPage />} />
				</Routes>
			</BrowserRouter>
		</Context.Provider>
	);
}
