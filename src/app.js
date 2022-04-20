import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroPage from "./pages/CadastroPage";
import LoginPage from "./pages/loginPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/cadastro" element={<CadastroPage />} />
			</Routes>
		</BrowserRouter>
	);
}
