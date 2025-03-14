import React from "react";
import Ninestart from "./api/nine.js";
import Link from "next/link.js";

export default function Nine(){
    return(
        <div>
            <h1 style ={{textAlign:'center', background:'blue' ,color:'white'}}>九宮格練習</h1>
            <Ninestart/>
            <div  style={{textAlign:'center'}}>
            <Link href="/" style={{display:'inline-block',textAlign:'center'}}><h1>回首頁</h1></Link>
            </div>
        </div>
    )
}