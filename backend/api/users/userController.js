const {
    create,
    getUserByUserEmail,
    getUserByUserId,
    getUsers,
    updateUser,
    deleteUser,
    getUserByUserPhoneNum,
    updateUserImg,
    getUserImgByUserId
  } = require("./userService");
  const { hashSync, genSaltSync } = require("bcrypt");
  const bcrypt = require("bcrypt");
  const { sign } = require("jsonwebtoken");

  function verifyPassword(password, hashedPassword){
    return bcrypt.compare(password, hashedPassword);
  }
  function generateToken(data) {
    const {userId, firstName, lastName, userEmail} = data;
    return sign({userId, firstName, lastName, userEmail}, process.env.secretJWT, {
        expiresIn: "1h",
    })
  }
  
  module.exports = {
    createUser: (req, res) => {
      const body = req.body;
      const salt = genSaltSync(10);
      body.password = hashSync(body.password, salt);
      create(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    login: (req, res) => {
      const body = req.body;
      getUserByUserEmail(body.email, async (err, results) => {
        if (err) {
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
        const isPasswordValid = await verifyPassword(body.password, results.userPassword);
        if (isPasswordValid) {
          const jsontoken = generateToken(results);
          return res.json({
            success: 1,
            message: "login successfully",
            token: jsontoken,
            data: {
                user_id : results.userId,
                Firstname : results.firstName,
                Lastname : results.lastName,
                Email : results.userEmail
            }
          });
        } else {
          return res.json({
            success: 0,
            data: "Invalid email or password"
          });
        }
      });
    },
    getUserByUserEmail: (req,res) => {
      const body = req.body
      getUserByUserEmail(body.email, (err, results) => {
        if(err){
          console.log(err);
        }
        if (!results) {
          return res.json({
            success: 0,
            data: "Invalid email"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      })
    },
    getUserByUserPhoneNum: (req, res) => {
      const body = req.body;
      getUserByUserPhoneNum(body.phoneNum, (err, results) => {
        if(err){
          console.log(err)
        }
        if(!results) {
          return res.json({
            success : 0,
            data: "Invalid Phone Number"
          })
        }
        return res.json({
          success : 1,
          data : results
        })
      })
    },
    getUserByUserId: (req, res) => {
      const id = req.params.id;
      getUserByUserId(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          console.log("getUserByUserId")
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        results.password = undefined;
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    getUserImgByUserId: (req, res) => {
      const body = req.body;
      getUserImgByUserId(body.userId, (err, results) => {
        if(err){
          console.log(err);
          return;
        }
        if(!results){
          return res.json({
            success: 0,
            message: "User not found"
          })
        }
        return res.json({
          success: 1,
          data: results
        })
      })
    },
    getUsers: (req, res) => {
      getUsers((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    },
    updateUsers: (req, res) => {
      const body = req.body;
      getUserByUserId(body.id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        if(results){
          updateUser(body, (err, results) => {
            if (err) {
              console.log(err);
              return;
            }
            return res.json({
              success: 1,
              message: "updated successfully"
            });
          });
        }
      });
    },
    updateUserImg: (req, res) => {
      const body = req.body;
      getUserByUserId(body.userId, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        if(results){
          updateUserImg(body, (err, results) => {
            if (err) {
              console.log(err);
              return;
            }
            return res.json({
              success: 1,
              message: "updated successfully"
            });
          });
        }
      });
    },
    deleteUser: (req, res) => {
      const data = req.params.id;
      deleteUser(data, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (results) {
          console.log("delete")
          return res.json({
            success: 0,
            message: "Record Not Found"
          });
        }
        return res.json({
          success: 1,
          message: "user deleted successfully"
        });
      });
    }
  };