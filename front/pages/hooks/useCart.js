import { useState } from "react";
import axios from "axios";

const apiurl ="http://localhost:5000/api/cart";

export default function useCart(){
    const [ cart, serCart] =useState([]);

    const incart =async(userId, productId, quantity) =>{
        const response =await axios.post(apiurl, {userId, productId, quantity});
        console.log("加入購物車成功", response.data);

    }
    return {cart, incart};
}