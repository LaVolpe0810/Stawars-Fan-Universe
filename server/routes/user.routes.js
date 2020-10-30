const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/user/new", UserController.create);
    app.get("/api/user", UserController.getAll);
    app.get("/api/user/:id", UserController.getOne);
    app.put("/api/user/:id", UserController.update);
    app.delete("/api/user/:id", UserController.delete);
}