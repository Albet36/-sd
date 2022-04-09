const  mongoose  = require("mongoose");

function Connect() {
    try {
        mongoose.connect("mongodb://localhost:27017/testabc");
        console.log("success");
    } catch (error) {
        console.log("failed");
    }
}
module.exports = { Connect };