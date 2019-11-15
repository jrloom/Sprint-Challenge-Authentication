/* eslint-disable prefer-const */
const router = require("express").Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/userModels");
const getToken = require("./getToken");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  const token = getToken(user.username);

  user.password = hash;

  Users.insert(user)
    .then(newUser =>
      res.status(201).json({ message: "registration succes", newUser, token })
    )
    .catch(error => res.status(500).json(error.message));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findUser({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = getToken(user.username);

        res.status(200).json({
          message: `Hi ${user.username}`,
          token
        });
      } else {
        res.status(401).json({ error: `This is not for you.` });
      }
    })
    .catch(error => res.status(500).json(error.message));
});

module.exports = router;
