import axios from "axios";

const Base_URL = "http://localhost:4000";

const instance = axios.create({
	baseURL: Base_URL,
});

function createConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

export function getTerms(token) {
	const config = createConfig(token);
	return instance.get("terms", config);
}
