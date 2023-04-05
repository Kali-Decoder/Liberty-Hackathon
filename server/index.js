const express = require("express")
const app = express();
require("dotenv").config();
const PORT =process.env.PORT || 3000;
app.use(require("cors")());
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use("/v1/nft",require("./routes/nftRoutes"))


app.listen(PORT,()=>{
    console.log("Server is listen on Port :",PORT);
})