import { useState } from "react";
import axios from "axios";

const apiurl ="http://localhost:5000/api/cart";

export default function useCart(){
    const [ cart, serCart] =useState([]);

    const incart =async(userId, productId, quantity) =>{
        const response =await axios.post(apiurl, {userId: parseInt(userId), productId: parseInt(productId), quantity: parseInt(quantity) || 1});

    }
    return {cart, incart};
}