const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: String,
	punchline: String,
	createdAt:{ type: Date, default: Date.now }
});

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;