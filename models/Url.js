const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
	shortId: String,
	longUrl: String,
	shortUrl: String,
	createdAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Url", urlSchema);
