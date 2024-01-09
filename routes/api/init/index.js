const router = require("express").Router();
const controller = require("../../../controllers/initController");

router.post("/init", controller.init.initController);

module.exports = router;
