import { Request, Response } from "express";
import api from "../config/restAPIConfig";
import getData from "../config/graphQLConfig";

const restAPIOrderDetails = async(req: Request, res: Response)=>{
    try{
        //get query params
        const page = req.query.page || 1;
        const limit = req.query.limit || 5;

        //filter orders between 12 DEC 2022 to 29 DEC 2022
        const startDate = new Date("2022-12-12");
        const endDate = new Date("2022-12-29");

        //get response for each page
        const response = await api.get('orders', {
            after: startDate,
            before: endDate,
            per_page: limit,
            page: page,
            orderby: 'date',
            order: 'asc'
        });

        //get orders
        const orders = response.data;

        res.status(200).json(orders);
    }
    catch(error){
        res.status(500).json('internal server error: ' + error);
    }
}

const graphQLOrderDetails = async(req: Request, res: Response)=>{
    try{
        //get query params
        const page = req.query.page || 1;
        const limit = req.query.limit || 5;

        //filter orders between 12 DEC 2022 to 29 DEC 2022
        const startDate = "2022-12-12";
        const endDate = "2022-12-29";

        //query
        const query = `
        {
          orders(first: ${limit}, query: "created_at:>${startDate} created_at:<${endDate}", sortKey: CREATED_AT) {
            edges {
              node {
                id
                name
                createdAt
                totalPriceSet {
                  presentmentMoney {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      `;

        const orders = await getData(query);

        res.status(200).json(orders);
    }
    catch(error){
        res.status(500).json('internal server error: ' + error);
    }
}

export default { restAPIOrderDetails, graphQLOrderDetails };