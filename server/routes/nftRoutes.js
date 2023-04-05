const { default: axios } = require("axios");
const express = require("express");

const routes = express.Router();
const baseUri = process.env.BASE_URI;
// routes.get("/", async (req, res) => {
//   try {
//     let data = await axios(
//       `${baseUri}/api/nft/0xa3aee8bce55beea1951ef834b99f3ac60d1abeeb/info?network=137`,{
//         headers:{
//           "x-api-key":"LDKhack"
//         }
//       }
//     );
//     console.log(data.data)
//     res.send("hello world")
//   } catch (error) {
//     console.log("error",error);
//     res.json({err:error})
//   }
// });

const { LibrtyDevKit, NETWORK } = require("librty-dev-kit");

const librtyInstance = new LibrtyDevKit("LDKhack", NETWORK.POLYGON);
const tokenBalance = librtyInstance.indexer.token.getTokenBalance(
  "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  "0x6fe489d80a48caf7472cd45f4258b9ffb5208e3c"
);

console.log("Token Balance",tokenBalance);

module.exports = routes;
