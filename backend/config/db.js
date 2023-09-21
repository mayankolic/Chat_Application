const mongoose = require("mongoose");
const db = "mongodb+srv://Mayank11:Mayank11@cluster0.kp73uhn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db).then(() => {
	console.log(" DB is connected ");
}).catch(err => console.log(err));

module.exports = db;