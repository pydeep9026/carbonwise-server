const express = require('express');
const { createProduct,updateProduct,getaProducts,getAllProducts,deleteProduct,addToWishlist,rating,} = require('../controllers/productcontroller');
const router = express.Router();


{/*user routes*/}

//get single product
router.get('/:id', getaProducts);

//Get all products
router.get('/', getAllProducts);

//add to wishlist
router.put('/wishlist', addToWishlist);

//rating
router.put('/rating',rating);





{/*admin routes*/}

//Create product
router.post('/create-product', createProduct);

//Update product
router.put('/:id',  updateProduct);

//Delete product
router.delete('/:id', deleteProduct);



module.exports = router;
