const router = require("express").Router();
const {
    createUser,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser,
    getUserByUserEmail
  } = require("./userController");

  router.get("/", getUsers);
  router.post("/", createUser);
  router.get("/:id", getUserByUserId);
  router.post("/login", login);
  router.patch("/", updateUsers);
  router.delete("/:id", deleteUser);
  router.post("/email", getUserByUserEmail)
  
  module.exports = router;