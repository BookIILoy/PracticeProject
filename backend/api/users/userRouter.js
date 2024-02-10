const router = require("express").Router();
const {
    createUser,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser,
    getUserByUserEmail,
    getUserByUserPhoneNum,
    updateUserImg,
    getUserImgByUserId
  } = require("./userController");
  const { checktoken } = require("../../auth/tokenValidation")

  router.get("/",checktoken, getUsers);
  router.post("/", createUser);
  router.get("/getusers/:id",checktoken, getUserByUserId);
  router.post("/login", login);
  router.patch("/",checktoken, updateUsers);
  router.delete("/:id",checktoken, deleteUser);
  router.post("/email", getUserByUserEmail);
  router.patch("/userimg", checktoken, updateUserImg);
  router.post("/userimg", checktoken, getUserImgByUserId)
  router.post("/phone", getUserByUserPhoneNum);
  router.get("/auth", checktoken, (req, res) => {
    const {userId, firstName, lastName, userEmail, userPhoneNum} = req.user;
    return res.json({
      success: 1,
      user: {
        user_id : userId,
        firstname : firstName,
        lastname : lastName,
        email : userEmail,
        phone : userPhoneNum
      },
    })
  })
  
  module.exports = router;