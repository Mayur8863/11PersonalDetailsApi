const router = require("express").Router();

const controllers = require("../controllers/usersControllers");

router.get("/get",controllers.usersGet);
router.post("/post",controllers.usersPost);
router.post("/delete/:id",controllers.usersDelete);
router.post("/update/:id",controllers.usersUpdate);

module.exports = router;