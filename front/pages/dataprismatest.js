import {PrismaClient} from '@prisma/client';//導入prisma client 讓你可以在程式中執行資料庫的資刪改查操作

const prisma =new PrismaClient();//當需要資料庫操作都可以通過這個prisma進行

async function main(){ //定義一個main的異步函式，在這個函式中，將會執行與資料庫的操作。因為資料庫操作是異步的，所以需要使用 async 和 await。
    const newUser =await prisma.user.create({
        data:{
            id: 4,
            name:'kanavi',
            email:'kana987@gmail.com'
        },
    });
    console.log(newUser);
}

main().catch((e) =>{ //執行main 如果有錯誤
    throw e;
}).finally(async()=>{
    await prisma.$disconnect();//關閉prisma client跟資料庫的連接
});