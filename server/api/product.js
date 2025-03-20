const express =require('express');
const { PrismaClient } =require('@prisma/client');
const prisma =new PrismaClient();

//商品列表
const allpro =async (req, res) =>{
    const produs =await prisma.product.findMany();//查詢所有product
    res.json(produs);
}

//單一商品
const onepro =async (req,res) =>{
    const {id}= req.params;
    const produ =await prisma.product.findUnique({
        where :{ id: parseInt (id) },
    });
    res.json(produ);
}

module.exports = {allpro, onepro};