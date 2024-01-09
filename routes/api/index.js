const router = require("express").Router();

router.use("/init", require("./init"));

module.exports = router;