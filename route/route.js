const express =require('express');
const router =express.Router();//使用router定義路由

let users = []; // 用來存儲資料的陣列 (模擬資料庫)

router.get('/',(req,res)=>{ //處理 GET 請求 (讀取資料)。
    res.json(users); //回應 JSON
    console.log('GET /users - Data:', users); 
    console.log('Hello World');
});

router.post('/', (req, res) => { //處理 POST 請求 (新增資料)。
    const user = req.body; //取得請求的資料
    users.push(user); //將資料存到陣列中
    res.json(user); //回應 JSON
    console.log(users);//顯示新增的資料
    console.log('Got a POST request');
});

router.put('/:name', (req, res) => { //處理 PUT 請求 (更新資料)。
    const userName = req.params.name; //URL中的NAME
    const {name,age} = req.body; //取得BODY中的資料
    let user = users.find(user => user.name === userName); //找出要更新的user

        user.name = name; //更新user的name
        user.age = age; //更新user的age
        res.json({user}); //回應 JSON    
    console.log('Got a PUT request at /user');
});

router.delete('/:name', (req, res) => { //處理 DELETE 請求 (刪除資料)。
    const userName = req.params.name; //URL中的NAME
    let userIndex =users.findIndex(user => user.name ===userName);//查找陣列中匹配的名稱
    users.splice(userIndex, 1);//使用splice()刪除該用戶，第二個參數代表刪除數量
    res.send('Got a DELETE request at /user');
    console.log('Got a DELETE request at /user');
});


module.exports =router;
