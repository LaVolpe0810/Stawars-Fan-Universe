const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/swfu_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established connection to database"))
    .catch(err => console.log("Database connection failed", err));