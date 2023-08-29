const fetch = require('node-fetch');

const getData = async(query: Object)=> {
    const response = await fetch(`https://${process.env.hostname}.myshopify.com/admin/api/${process.env.apiVersion}/graphql.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.accessToken
        },
        body: JSON.stringify({ query })
    });
    const data = await response.json();
    return data;
}

export default getData