import {Client} from "dwolla-v2";
const dotenv = require('dotenv').config()


const dwolla =   new Client({
  key: process.env.DWOLLA_APP_KEY || '',
  secret: process.env.DWOLLA_APP_SECRET|| '',
  environment: 'sandbox'
})


export default dwolla;