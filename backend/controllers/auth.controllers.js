const User = require("../models/user.model");
const sendMail = require("../utils/sendMail");

const registration = async (req, res) => {
	const { username, email, password } = req.body;
	const newUser = new User({
		username,
		email,
		password,
	});

	await newUser.save();

	sendMail(email, username, newUser._id);

	res.status(201).json({
		message: "User registered successfully",
		user: newUser,
	});
};

const login = async (req, res) => {
	const { email, password } = req.body;
	const isUserExist = await User.findOne({ email: email });
	console.log(isUserExist);

	// user not found
	if (!isUserExist) {
		return res.status(404).send({
			message: "invalid credentials",
		});
	}

	const passwordMatch = await isUserExist.comparePassword(password);
	console.log(passwordMatch);

	if (!passwordMatch) {
		return res.status(404).send({
			message: "invalid credentials",
		});
	}

	res.status(201).json({
		message: "User logged in successfully",
		email: isUserExist.email,
	});
};

// Verification email
const verify = async (req, res) => {
	const { id } = req.params;

	const user = await User.findById(id);

	if (!user) {
		return res.status(404).send({
			message: "User not found",
		});
	}

	user.isVerified = true;
	await user.save();

	return res.status(200).send({
		message: "Email verified successfully",
		userID: user._id,
	});
};

const getAllUsers = async (req, res) => {
	const users = await User.find();
	return res.status(200).send(users);
};

module.exports = {
	registration,
	login,
	verify,
	getAllUsers,
};
