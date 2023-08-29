import express, { Request, Response } from 'express';
import orderRouter from './routers/orderRouter';
import productRouter from './routers/productRouter';

//create an express instance
const app = express();

//To parse the incoming requests with JSON we are using express.json() which is a built-in middleware function in Express.
app.use(express.json());

//Define port
const port = process.env.port || 8080;

//order router
app.use(orderRouter);

//product router
app.use(productRouter);

//get request when server is live
app.get('/', (req: Request, res: Response) => {
    res.status(200).json('Server is Live');
})

app.listen(port, () => {
    console.log('Server listening at port ' + port);
})