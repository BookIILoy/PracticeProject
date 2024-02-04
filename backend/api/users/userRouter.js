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
  const { checktoken } = require("../../auth/tokenValidation")

  router.get("/",checktoken, getUsers);
  router.post("/", createUser);
  router.get("/:id",checktoken, getUserByUserId);
  router.post("/login", login);
  router.patch("/",checktoken, updateUsers);
  router.delete("/:id",checktoken, deleteUser);
  router.post("/email",checktoken, getUserByUserEmail)
  
  module.exports = router;