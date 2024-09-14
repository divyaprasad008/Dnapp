import express from "express";
import env from "dotenv/config";

const app = express();

const port  = process.env.PORT || 2300

app.listen(port,()=>{
    console.log(`Node server started at ${port}`);
})


app.get('/test',(req,res)=>{
    res.send("Hello")
})