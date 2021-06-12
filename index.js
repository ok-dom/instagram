const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send("Welcom");
});

app.listen(3000, () => {
	console.log("hello hhhhhhhhhhhhhhh");
});