//import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

//configure env
require('dotenv').config();

const api = new WooCommerceRestApi({
  url: "https://ninjashop.in",
  consumerKey: process.env.consumerKey,
  consumerSecret: process.env.consumerSecret,
  version: "wc/v3"
});

export default api;