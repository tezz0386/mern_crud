const express = require('express');
const router = express.Router();

const { indexProduct, storeProduct, showProduct, updateProduct, deleteProduct } = require('../HTTP/Controllers/ProductController');

router.route('/products').get(indexProduct);
router.route('/products/:id').get(showProduct);
router.route('/products/:id').patch(updateProduct);
router.route('/products/:id').delete(deleteProduct);
router.route('/products').post(storeProduct);



module.exports = router;