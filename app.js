//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const email = req.body.email;

	const data = {
		members: [
			{
				email_address: email,
				status: "subscribed",
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName,
				},
			},
		],
	};

	const jsonData = JSON.stringify(data);

	console.log(jsonData);
	const url = "https://us22.api.mailchimp.com/3.0/lists/40fc189956";
	const options = {
		method: "POST",
		auth: "gogo:8e0d0c964f24f8947b8718b1155c7902-us22",
	};

	const request = https.request(url, options, function (response) {
		if (response.statusCode === 200) {
			res.sendFile(__dirname + "/success.html");
		} else {
			res.sendFile(__dirname + "/failure.html");
		}

		response.on("data", function (data) {
			console.log(JSON.parse(data));
		});
	});

	// request.write(jsonData);
	request.end();
});

app.listen(process.env.PORT || 3000, (req, res) => {
	console.log("Server is running on port 3000");
});

//api key
//8e0d0c964f24f8947b8718b1155c7902-us22

//list id
//40fc189956
