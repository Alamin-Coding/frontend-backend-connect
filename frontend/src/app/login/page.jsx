"use client";
const Login = () => {
	// const [loginData, setLoginData] = useState({
	//     email: "",
	//     password: "",
	// });

	// const handleChange = (e) => {
	//     const {name, value} = e.target;
	//     setLoginData({
	//         ...loginData,
	//         [name]: value,
	//     });
	// };

	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
        let data = {
            email: formData.get("email"),
            password: formData.get("password"),
        }; 
        alert(JSON.stringify(data));
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div>
						<form action="" onSubmit={onSubmit}>
							<input
								className="border"
								type="email"
								name="email"
								placeholder="Email"
							/>
							<input
								className="border"
								type="password"
								name="password"
								placeholder="Password"
							/>
							<button type="submit">Login</button>
							<p>
								You don&apos;t have an account? <a href="/signup">Sign up</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
