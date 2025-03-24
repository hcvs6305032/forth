import React, { useEffect ,useState } from "react";
import usePro from "./hooks/useProduct";
import useCart from "./hooks/useCart";
import Link from "next/link";
import useLogin from "./hooks/useLogin";
import {useRouter } from 'next/router';


export default function Produc(){
    const {produs} =usePro();
    const {incart} =useCart();
    const router =useRouter();
   
    const [user, setUser] = useState(() => {
        const storeuser = localStorage.getItem("user");
        return storeuser ? JSON.parse(storeuser) : null;
    });
    // useEffect(() =>{
    //     const storeuser =localStorage.getItem("user");
    //     console.log("localStorage user:", storeuser);
    //     setUser(JSON.parse(storeuser));
    //     alert(storeuser);
    //     },[]);

    const [quantity ,setQuantity] =useState({});

    //更新數量
    const handleQuan =(productId, value) =>{
        if(value <1) return;
        setQuantity((prev) =>({...prev, [productId]: value}));

        }


    return (
        <div>
            <h1>商品列表</h1>
            <div style={{display:"flex"}}>
                {produs.map((item) =>(
                    
                    <form>
                    <div key={item.id} style={{margin:"20px"}}>
                        <h1>{item.id} {item.proname}</h1><br/>
                        商品描述: <p>{item.description}</p><br/>
                        <p>價錢:{item.price}</p>

                        {/* 數量選擇按鈕 */}
                        <div style={{display:"flex",alignItems:"center"}}>
                        <button type="button" onClick={()=> handleQuan(item.id, (quantity[item.id] ||1) -1)}>-</button>
                        {quantity[item.id] ||1}
                        <button type="button" onClick={()=> handleQuan(item.id, (quantity[item.id] ||1) +1)}>+</button>
                        </div>

                        <button type="button" onClick={() =>{incart(user.id, item.id, quantity[item.id]|| 1)}}> 加入購物車</button>
                    </div>
                    </form>
                ))}
            </div>
            <Link href='/' style={{display:'inline-block'}}>返回首頁</Link>
        </div>
    )
}