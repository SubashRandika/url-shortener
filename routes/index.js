const express = require("express");
const router = express.Router();

const Url = require("../models/Url");

// @route       GET /:shortId
// @desc        Redirect short url to long(original) url
router.get("/:shortId", async (req, res) => {
	const { shortId } = req.params;

	try {
		const url = await Url.findOne({ shortId });

		if (!url) {
			return res.status(404).send({ message: "Shorten url not found" });
		}

		return res.redirect(url.longUrl);
	} catch (err) {
		console.error(err);
		return res.status(500).send({ error: "Unable to fetch short url" });
	}
});

module.exports = router;
