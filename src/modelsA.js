const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const modelA = new Schema(
{
    age : {type: Number,default: 0},
    address: {type: Number,default: 0},
},
{
    timestamps: true,
}
)
    module.exports = mongoose.model("modelA",modelA);