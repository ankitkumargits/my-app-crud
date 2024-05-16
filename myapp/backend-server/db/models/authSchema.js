const mongoose = require('mongoose');


const authSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const Authentication = new mongoose.model("Authentication",authSchema);

module.exports = Authentication;