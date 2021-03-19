const express = require("express");
const router = express.Router();
const config = require("config");
const validUrl = require("valid-url");
const shortid = require("shortid");

const Url = require("../models/Url");

// @route       POST /api/url/shorten
// @desc        Create a short url from long url
router.post("/shorten", async (req, res) => {
	const { longUrl } = req.body;
	const baseUrl = config.get("baseUrl");

	// check whether baseUrl is valid
	if (!validUrl.isUri(baseUrl)) {
		return res.status(400).send({ message: "Not a valid base url" });
	}

	if (!longUrl) {
		return res.status(400).send({ message: "longUrl is a required field. Cannot be empty" });
	}

	if (!validUrl.isUri(longUrl)) {
		return res.status(400).send({ message: "Provide long url is invalid" });
	}

	try {
		let url = await Url.findOne({ longUrl });

		if (url) {
			return res.status(200).send(url);
		} else {
			// create a short id
			const shortId = shortid.generate();
			const shortUrl = `${baseUrl}/${shortId}`;

			url = new Url({
				shortId,
				longUrl,
				shortUrl,
				date: new Date()
			});

			await url.save();

			return res.status(201).send(url);
		}
	} catch (err) {
		console.error(err);
		return res.status(500).send({ error: "Unable to create short url" });
	}
});

module.exports = router;
