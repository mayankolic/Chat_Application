const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, minLength: 6 },
});
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
userSchema.methods.generateAuthToken = async function () {
	const user = this
	const token = await jwt.sign({ _id: user._id.toString() }, 'thisisnewcourse')
	return token;
}
const User = mongoose.model("User", userSchema);
module.exports = User;
