const {
    createProduct,
    getProduct,
    getProductById,
    updateProduct
} = require("./adminService")

module.exports = {
    createProducts: (req, res) => {
        const body = req.body;
        createProduct(body, (err, results) => {
            if(err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
      },
      getProduct: (req, res) => {
        getProduct((err, results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
      },
      getProductById: (req,res) => {
        const body = req.body;
        getProductById(body.id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "Product not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
      },
      updateProduct: (req, res) => {
        const body = req.body;
        getProductById(body.id, (err, results) => {
            if(err) {
                console.log(err);
                return;
            }
            if(!results) {
                return res.json({
                    success: 0,
                    message: "Product not found"
                });
            }
            if(results) {
                updateProduct(body, (err, results) => {
                    if(err){
                        console.log(err);
                        return;
                    } 
                    else {
                        console.log(body)
                        return res.json({
                            success: 1,
                            message: "update successfully"
                        });
                    }
                });
            }
        });
      }
}