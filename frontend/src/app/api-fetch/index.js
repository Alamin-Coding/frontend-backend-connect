const axios = require("axios");

const api = axios.create({
	baseURL: "http://localhost:5000/api/v1/auth",
	headers: {
		"Content-Type": "application/json",
	},
	withCredentials: true,
});

const registration = async (username, email, password) => {
	try {
		const response = await api.post("/register", { username, email, password });
		return response.data;
	} catch (error) {
		return error;
	}
};
const login = async (email, password) => {
	try {
		const response = await api.post("/login", { email, password });
		return response.data;
	} catch (error) {
		return error;
	}
};

export { registration, login };
