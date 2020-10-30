const express = require("express");
const app = express();
const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(8000, () => console.log("Listening on port 8000"));