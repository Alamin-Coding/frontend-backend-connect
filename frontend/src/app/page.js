import { Button } from "@heroui/react";
import axios from "axios";

const HomePage = async () => {
	try {
		const response = await axios.get("http://localhost:5000/api/v1/auth/users");
		console.log(response);
	} catch (error) {
		console.log(error);
	}
	return (
		<div>
			HomePage <Button>My Button</Button>
		</div>
	);
};

export default HomePage;
