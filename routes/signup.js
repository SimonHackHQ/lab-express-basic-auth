const express   = require('express');
const router    = express.Router();
const bcrypt    = require('bcryptjs');

const User      = require('../models/User.model');

router.get("/signup", (req, res, next) => {
    res.render("signup");
});

router.post("/signup/new", (req, res, next) => {
    const salt              = bcrypt.genSaltSync(10);
    const hashedPassword    = bcrypt.hashSync(req.body.password, salt);

    console.log("hdgvkjhzbdkjfhv");

    User
        .create({
            username: req.body.username,
            password: hashedPassword
        })
        .then(() => {
            console.log("Successfuly created new account!")
            res.redirect("/");
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
});

module.exports = router;