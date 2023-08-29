//import express to use router method
import express from 'express';
//import methods from product Controller
import productDetails from '../controllers/productController';

//express.Router() is a method in the Express.js that creates a new router object.
//It is used to define routes for a specific endpoint.
const productRouter = express.Router();

//create an endpoint to get product details.
productRouter.get('/products', productDetails);

//export to router to use in other files (index.js file)
export default productRouter;