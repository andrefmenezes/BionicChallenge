const { Router } = require('express');
const routes = Router();
const Alarme = require("../controllers/alarmeControllers");
const alarme = new Alarme();

routes.get("/alarm",alarme.show);
routes.get("/alarme",alarme.index);
routes.get("/alarmFilterDevice/:deviceType",alarme.showFilterDevice);
routes.get("/alarmFilterType/:type",alarme.showFilterType);
routes.get("/alarmFilter/:deviceType/:type",alarme.showFilter);
routes.post("/alarm",alarme.create);
routes.delete("/alarm/:alarme_id",alarme.delete);
module.exports = routes;