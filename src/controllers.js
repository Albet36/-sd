const { Muti, Single } = require("./query");
const modelA = require("./modelsA");
const mongoose = require("mongoose");

class controllers {
  home(req, res, next) {
  
    modelA
      .aggregate([
       
        {
          $addFields: {
            lienHe: { $sum: { $divide: ["$age", "$address"] } },
            abc: { $sum: { $sum: ["$age", "$address"] } },
          },
        },
      ])

      .then((model, abc) => {
        res.render("home", { model, abc });
      })
      .catch(next);
  }
  form(req, res) {
    res.render("form");
  }
  modela(req, res, next) {
    modelA
      .create({
        age: req.body.age,
        address: req.body.address,
      })
      .then(() => res.redirect("home"))
      .catch(next);
  }
}
module.exports = new controllers();
