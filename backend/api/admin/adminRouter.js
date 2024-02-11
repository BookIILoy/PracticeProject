const router = require("express").Router();
const express = require("express")
const multer = require("multer");
const path = require("path");
require("dotenv").config();
const{
    createProducts,
    getProduct,
    getProductById,
    updateProduct
} = require("./adminController")

const storage = multer.diskStorage ({
    destination: './upload/images',
    filename: (req, file, callBack) => {
      return callBack(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  
const upload = multer ({
    storage: storage
})

router.use('/images', express.static('upload/images'));
router.get('/images', express.static('upload/images'));
router.post("/upload",upload.single('img'), (req,res) =>{
    res.json({
        success: 1,
        image_url:`${req.file.filename}`
    })
});
router.post("/createproduct", createProducts);
router.get("/product", getProduct);
router.post("/getproduct", getProductById);
router.patch("/product", updateProduct);

module.exports = router;