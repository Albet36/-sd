const controllers = require("./controllers");

function routes(app) {
    app.get("/home",controllers.home);
    app.get("/form",controllers.form);
    app.post("/modela",controllers.modela);
}
module.exports = routes;