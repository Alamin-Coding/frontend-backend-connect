"use client";
import { registration } from "../api-fetch";
const Signup = () => {
	const onSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		let data = {
			username: formData.get("username"),
			email: formData.get("email"),
			password: formData.get("password"),
		};
		registration(data.username, data.email, data.password)
			.then((res) => console.log(res))
			.then(() => {
				setTimeout(() => {
					window.location.href = "/login";
				}, 3000);
			})
			.catch((err) => console.log(err));
		// try {
		//    const response= registration(data.username, data.email, data.password)
		//    const resData=response.data
		//    console.log(resData)
		//    setTimeout(() => {
		//        window.location.href = "/login";
		//    }, 3000)
		// } catch (error) {
		//     console.log("Error in signup ",error)
		// }
	};
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto">
				<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
					<div>
						<form action="" onSubmit={(e) => onSubmit(e)}>
							<input type="text" name="username" placeholder="User Name" />
							<input type="email" name="email" placeholder="Email" />
							<input type="password" name="password" placeholder="Password" />
							<button type="submit">Create a account</button>
							<p>
								Already have an account? <a href="/login">Login</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Signup;
