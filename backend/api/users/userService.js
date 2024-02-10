const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `INSERT INTO register_users (firstName, lastName, userEmail, userPassword, userPhoneNum, userBirth) 
                values(?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        data.phoneNum,
        data.birth
      ],
      (error, results, fields) => {
        if (error) {
          console.log(error)
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUserImg: (data, callBack) => {
    pool.query(
      `UPDATE profile_img SET imgId = ? WHERE userId = ?`,
      [
        data.imgId,
        data.userId
      ],
      (error, results, fields) => {
        if(error) {
          console.log(error);
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    )
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `SELECT * FROM register_users WHERE userEmail = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserByUserPhoneNum: (phoneNum, callBack) => {
    pool.query(
      `SELECT * FROM register_users WHERE userPhoneNum = ?`,
      [phoneNum],
      (err, results, fields) => {
        if(err) {
          callBack(err);
        }
        return callBack(null, results[0]);
      }
    )
  },
  getUserByUserId: (id, callBack) => {
    pool.query(
      `SELECT * FROM register_users WHERE userId = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUserImgByUserId: (userId, callBack) => {
    pool.query(
      `SELECT * FROM profile_img WHERE userId = ?`,
      [userId],
      (error, results, fields) => {
        if(error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    )
  },
  getUsers: callBack => {
    pool.query(
      `SELECT * FROM register_users`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateUser: (data, callBack) => {
    pool.query(
      `UPDATE register_users SET firstName=?, lastName=?, userEmail=? , userPhoneNum=? WHERE userId = ?`,
      [
        data.firstName,
        data.lastName,
        data.email,
        data.phoneNum,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteUser: (data, callBack) => {
    pool.query(
      `DELETE FROM register_users WHERE userId = ?`,
      [data],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};