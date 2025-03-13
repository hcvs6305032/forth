const express = require('express');
const app =express();
const userRoute =require('./route/route.js');
const port = 3001;

app.use(express.json()); //讓 Express 可以解析 JSON 格式的請求

app.use('/users', userRoute); // 掛載路由

app.listen(port, () => console.log('Server running'));



