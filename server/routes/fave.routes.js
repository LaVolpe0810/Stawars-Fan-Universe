const FaveController = require("../controllers/fave.controller");

module.exports = (app) => {
    app.post("/api/fav/new", FaveController.create);
    app.get("/api/fav", FaveController.getAll);
    app.get("/api/fav/:id", FaveController.getOne);
    app.put("/api/fav/:id", FaveController.update);
    app.delete("/api/fav/:id", FaveController.delete);
}