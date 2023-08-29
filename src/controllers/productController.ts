import { Request, Response } from "express";
import api from "../config/APIConfig";

const productDetails = async(req: Request, res: Response)=>{
    try{
        //get response
        const response = await api.get('products', {
            orderby: 'title',
            order: 'asc',
            //to get all products details: add per_page option to list 100 products/page, default is 10 products/page
            per_page: 100,
        });
        
        //get products
        const products = response.data;

        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json('internal server error: ' + error);
    }
}

export default productDetails;