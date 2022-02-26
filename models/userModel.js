const mongoose = require("mongoose");

const Users = []

const UsersList = mongoose.model("UsersList", Users);

module.exports = UsersList;