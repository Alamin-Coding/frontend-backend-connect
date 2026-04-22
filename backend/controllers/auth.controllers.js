const User = require("../models/user.model");
const sendMail = require("../utils/sendMail");

const registration = async (req, res) => {
	const { username, email, password } = req.body;
	const newUser = await User({
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

const login = (req, res) => {
	res.send("Login successful");
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

module.exports = {
	registration,
	login,
	verify,
};
