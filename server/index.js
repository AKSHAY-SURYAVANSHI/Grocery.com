const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.post("/order", async (req,res)=>{
    try{
    const razorpay = new Razorpay({
        key_id : process.env.RAZORPAY_KEY_ID,
        key_secret : process.env.RAZORPAY_SECRET,
    });

    const option = req.body;
    const order = await razorpay.orders.create(option);

    if(!order){
        return res.status(500).send("Error");
    }
    
    res.json(order);
    }catch(err){
        console.log(err);
        res.status(500).send("Error");
    }
});

app.listen(PORT,()=>{
    console.log("listening on port",PORT);
})