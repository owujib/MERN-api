const express = require('express');

const productController = require('../controllers/product.controller');
const authController = require('../controllers/auth.controller');

const router = express.Router();

//read data
router.get(
  '/',
  // authController.isAuth,
  productController.getAllProducts
);

// router.use(authController.isAuth);

//create data
router.post(
  '/new-product',
  // authController.isAuth,
  productController.createProduct
);

//read single data
router.get('/:id', productController.getSingleProduct);

//update data
router.patch(
  '/update-product/:id',
  // authController.isAuth,
  productController.updateProduct
);

router.patch(
  '/upload-img/:id',
  // authController.isAuth,
  productController.uploadProductImg
);

//delete data
router.delete(
  '/delete-product/:id',
  // authController.isAuth,
  productController.deleteProduct
);

module.exports = router;
