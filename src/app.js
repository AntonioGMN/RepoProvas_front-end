import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/loginPage";
import SighUpPage from "./pages/sighUpPage";
import ProvasPage from "./pages/provasPage";
import Context from "./contexts/AppContext";
import { useState } from "react";

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
					<Route path="/signUp" element={<SighUpPage />} />
				</Routes>
			</BrowserRouter>
		</Context.Provider>
	);
}
