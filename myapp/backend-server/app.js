const express = require('express');
const app = express();
const connectToMongo = require('./db/connection.js');

connectToMongo();
app.use(express.json());
app.use("/auth", require("./routes/auth.js"));
app.use("/api", require("./routes/webapp.js"));

app.listen(5000, ()=> {
    console.log('listening on port 5000');
})