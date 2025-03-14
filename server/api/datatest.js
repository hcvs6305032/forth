import { PrismaClient } from "@prisma/client";//導入prisma client 讓你可以在程式中執行資料庫的資刪改查操作
import express from 'express';//導入express框架


const prisma =new PrismaClient();
const app = express();

app.get('/api/datatest', async (req, res) => {
    const user =await prisma.user.findMany();
    console.log(user);
    console.log("又成功了");

    res.json(user);
});
/*
export default async function getdata(req,res){ //(路由)req是http請求物件，包含請求方法(get).請求標頭..等。 res是回應物件，用於向客戶端發送回應
    if(req.method ==='GET'){//判斷請求為GET
        const user =await prisma.user.findMany();//查詢user資料表並返回所有資料
        console.log(user);
        console.log("又成功了");

        res.json(user);//(回應)用res.json將資料傳給客戶端
    }
    else{
        res.status(500).json({error:'請求方法不被允許'});
    }
}//用於獲取資料庫中的資料，使用get方法*/
