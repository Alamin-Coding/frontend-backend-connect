"use client";
const Signup = () => {
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
                        <input type="text" name='name' placeholder='User Name' />
                        <input type="email" name='email' placeholder='Email' />
                        <input type="password" name='password' placeholder='Password' />
                        <button type='submit'>Create a account</button>
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup