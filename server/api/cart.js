const  { PrismaClient } =require("@prisma/client");
const prisma =new PrismaClient();

//加入購物車
const addcart =async (req,res) =>{
    const {userId, productId} =req.body;
    
    //確保商品id跟使用者id同時存在
    if(!userId || !productId){
        return res.status(400).json({error:沒有獲取使用者資料});
    }

    //檢查商品是否在購物車內
    const checkcart =await prisma.cart.findFirst({
        where: { userId, productId}
    });

    if(checkcart){
        return res.status.json({商品已經在購物車});
    }

    //新增商品至購物車
    const cartitem =await prisma.cart.create({
        data: {userId, productId}
    });

    res.json(cartitem);
}

//取得使用者購物車
const getcart =async (req,res) =>{
    const {userId} =req.params;

    const cartall  =await prisma.cart.findMany({
        where: {userId: parseInt(userId)},
        include: {productId:true}
    });
    res.json(cartall);
}

module.exports ={addcart, getcart};