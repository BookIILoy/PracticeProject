const pool = require("../../config/database")

module.exports = {
    createProduct : (data, callBack) => {
        pool.query(`INSERT INTO product_data (productName, 
            productOldPrice, productNewPrice,productCount, productDesc,
            productImg) VALUES(?,?,?,?,?,?)`,
            [
                data.name,
                data.oldPrice,
                data.newPrice,
                data.count,
                data.desc,
                data.img
            ],(err, results, fields) => {
                if(err){
                    console.log(err);
                    callBack(err);
                }
                return callBack(null, results);
            });
    },
    getProduct: callBack => {
        pool.query(
            `SELECT * FROM product_data`,
            [],
            (error, results, fields) => {
                if(error){
                    console.log(error);
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    updateProduct : (data, callBack) => {
        pool.query(
            `UPDATE product_data SET productName = ? , productOldPrice = ?, 
            productNewPrice = ?, productCount = ?, productDesc = ?, productImg = ? WHERE productId = ?`,
            [
                data.name,
                data.oldPrice,
                data.newPrice,
                data.count,
                data.desc,
                data.img,
                data.id
            ],
            (error, results, fields) => {
                if(error) {
                    console.log(error);
                    callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getProductById: (id, callBack) => {
        pool.query(
            `SELECT * FROM product_data WHERE productId = ?`,
            [id],
            (error, results, fields) => {
                if(error){
                    console.log(error);
                    callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    }

};