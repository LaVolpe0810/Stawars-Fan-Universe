const FaveController = require("../controllers/fave.controller");

module.exports = (app) => {
    app.post("/api/fave/new", FaveController.create);
    app.get("/api/fave", FaveController.getAll);
    app.get("/api/fave/:id", FaveController.getOne);
    app.put("/api/fave/:id", FaveController.update);
    app.delete("/api/fave/:id", FaveController.delete);
}