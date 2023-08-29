import { Request, Response } from "express";
import api from "../config/restAPIConfig";
import getData from "../config/graphQLConfig";

const restAPIProductDetails = async(req: Request, res: Response)=>{
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

const graphqlProductDetails = async(req: Request, res: Response)=>{
    try{
        //query
        const query = `{
            products(first: 100, sortKey: TITLE) {
              edges {
                node {
                  id
                  title
                  description
                  images(first: 2) {
                    edges {
                      node {
                        originalSrc
                      }
                    }
                  }
                }
              }
            }
          }`;
        
        //get products
        const products = await getData(query);

        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json('internal server error: ' + error);
    }
}

export default { restAPIProductDetails, graphqlProductDetails };