import React from "react";
import usePro from "./hooks/useProduct";
import Link from "next/link";

export default function Produc(){
    const {produs} =usePro();

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
                        <button> 加入購物車</button>
                    </div>
                    </form>
                ))}
            </div>
            <Link href='/' style={{display:'inline-block'}}>返回首頁</Link>
        </div>
    )
}