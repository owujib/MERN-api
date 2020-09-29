const fs = require('fs');
const formidable = require('formidable'); //file upload

const Product = require('../models/ProductModel');
const AppError = require('../utils/appError');

exports.getAllProducts = async (req, res, next) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    next(new AppError(error, 500));
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    next(new AppError(error, 500));
  }
};

exports.getSingleProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findById({ _id: id });
    res.status(200).json(product);
  } catch (error) {
    next(new AppError(error, 500));
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    let id = req.params.id;
    const product = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    next(new AppError(error, 500));
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    let id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id: id });
    res.send('product deleted');
  } catch (error) {
    next(new AppError(error, 500));
  }
};

exports.uploadProductImg = (req, res, next) => {
  let id = req.params.id;
  let formData = new formidable.IncomingForm();

  formData.parse(req, (err, fields, files) => {
    let oldProductImg = files.productImg.path;

    let productImg =
      'uploads/product-images/' +
      new Date().getTime() +
      '-' +
      files.productImg.name;

    fs.rename(oldProductImg, productImg, (err) => {
      if (err) throw next(new AppError(err));
    });

    Product.findByIdAndUpdate(
      { _id: id },
      { productImg },
      { new: true },
      (err, doc) => {
        if (err) throw err;

        doc.save();
        res.send(doc);
      }
    );
  });
};
