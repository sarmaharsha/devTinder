const express=require("express");
const app=express();
app.use((req,res)=>{
res.send("Hi I am working")
})
app.listen(3000,  (req,res)=>{
    console.log("Server is running on port 3000");
});