const Product = require('../../Models/Product')




// to store product in database /api/v1/products
exports.storeProduct=(req, res, next)=>{

    // to create and save
    const product = new Product(req.body);
    product.save();
    
    // or to create and save
    // const product = Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

// to get all products /api/v1/products

exports.indexProduct = async (req, res, next)=>{
    const products = await Product.find({});
    res.status(200).json({
        success:true,
        count:products.length,
        products:products
    });
}


// to get single products /api/v1/products/:id

exports.showProduct = async (req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:'product not found'
        })
    }
    res.status(200).json({
        success:true,
        product
    });
}

// to update products /api/v1/products/:id
exports.updateProduct = async (req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:'product not found'
        });
    }
    product.update(req.body);
    res.status(200).json({
        success:true,
        product
    })
};

exports.deleteProduct = async (req, res, next)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            success:false,
            message:'product not found'
        });
    }
    product.remove();
    res.status(200).json({
        success:true,
        message:'product deleted'
    });
}