//總啟動開關
const express =require('express');
const cors =require('cors');
const countroute =require('./route/countroute.js');

const app =express();
const port =5000;

app.use(cors());
app.use(express.json());
//設定count路由
app.use("/api", require("./route/countroute"));

//監聽伺服器
app.listen(port, ()=>{
    console.log("server running");
})