const express =require("express");
const {PrismaClient} =require("@prisma/client");
const prisma =new PrismaClient();

const login =async(req, res) =>{
    const {email, password} =req.body;

    const useracc =await prisma.user.findUnique({
        where: { email },
    });

    //偵查使用者
    if(!useracc){
        return res.status(401).json({message: "使用者不存在"});
    }

    //偵測密碼是否正確
    if(useracc.password !== password){
        return res.status(401).json({message: "密碼錯誤"});
    }

    res.json({
        message: "登入成功",
        user:{
            name: useracc.name,
            email: useracc.email
        }
    });

}

module.exports= {login};
