const Product = require('../../Models/Product');
const products = require('../../Data/products');
const dotenv = require('dotenv');
const connectDatabase = require('../../config/database')


dotenv.config({path:'app/config/config.env'})

connectDatabase();

const storeData = async ()=>{
    try {
        await Product.deleteMany();
        console.log('product deleted');
        await Product.insertMany(products);
        console.log('product created');
        process.exit();
    } catch (error) {
        console.log(error);
        process.exit();
    }
}

storeData();
