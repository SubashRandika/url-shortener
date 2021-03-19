const mongoose = require("mongoose");
const config = require("config");

const DB_URL = config.get("mongoDBUrl");

const connectDB = async () => {
	try {
		await mongoose.connect(DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});

		console.log("Successfully connected to Database...");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

module.exports = connectDB;
