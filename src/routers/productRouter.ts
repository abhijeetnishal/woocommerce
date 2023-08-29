//import express to use router method
import express from 'express';
//import methods from product Controller
import productDetails from '../controllers/productController';

//express.Router() is a method in the Express.js that creates a new router object.
//It is used to define routes for a specific endpoint.
const productRouter = express.Router();

//create an endpoint to get rest api product details.
productRouter.get('/rest-api/products', productDetails.restAPIProductDetails);

//create an endpoint to get graphql product details.
productRouter.get('/graphql/products', productDetails.graphqlProductDetails);

//export to router to use in other files (index.js file)
export default productRouter;