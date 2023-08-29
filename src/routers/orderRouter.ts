//import express to use router method
import express from 'express';
//import methods from order Controller
import orderDetails from '../controllers/orderController';

//express.Router() is a method in the Express.js that creates a new router object.
//It is used to define routes for a specific endpoint.
const orderRouter = express.Router();

//create an endpoint to get order details.
orderRouter.get('/orders', orderDetails);

//export to router to use in other files (index.js file)
export default orderRouter;