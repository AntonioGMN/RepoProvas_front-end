import axios from "axios";

const Base_URL = "http://localhost:4000";

const instance = axios.create({
	Base_URL,
});

function createConfig(token) {
	return {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
}

export function sighUp(user) {
	return axios.post("http://localhost:4000/sighUp", user);
}

export function login(user) {
	return axios.post("http://localhost:4000/login", user);
}
