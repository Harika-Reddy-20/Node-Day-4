const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());    
app.get("/",(req,res)=>{
     res.send({res:"Success"})
})

app.post("/addUser",(req,res)=>{
    console.log(req.query);
    res.send("Success")
})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});
