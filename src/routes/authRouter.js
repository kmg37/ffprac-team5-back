const express = require("express");

const router = express.Router();

const { login, register, getMe } = require("../controllers/userauth");
router.post("/signup", register);

router.route("/login").post(login);
router.route("/me").get(getMe);

module.exports = router;
