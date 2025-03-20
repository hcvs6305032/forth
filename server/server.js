//總啟動開關
const express =require('express');
const cors =require('cors');
const countroute =require('./route/countroute.js');
const timedownroute =require('./route/timedownroute.js');
const dataroute =require('./route/dataroute.js');
const loginroute =require("./route/loginroute.js");
const productroute =require("./route/productroute.js");

const app =express();
const port =5000;

app.use(cors());
app.use(express.json());
//設定count路由
app.use("/api", require("./route/countroute"));
//設定倒數器路由
app.use("/api", require("./route/timedownroute"));
//設定資料庫路由
app.use("/api", require("./route/dataroute"));
//設定登入路由
app.use("/api", require("./route/loginroute"));
//設定商品路由
app.use("/api", require("./route/productroute"));

//監聽伺服器
app.listen(port, ()=>{
    console.log("server running");
})