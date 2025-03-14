import React from "react";
import Link from "next/link";
import useLetsgo from "../hooks/useLetsgo.js";

export default function Bye(){
    const {a, cclick} = useLetsgo();
    return(
        <div style={{textAlign:'center'}}>
            <h1> Good Bye</h1>
            <button onClick={() => cclick("up")}>PLUS</button>
            <button onClick={() => cclick("down")}>MINUS</button>
            <h2>現在: {a}</h2>
            <Link href="/"><h1>回到首頁</h1></Link>
        </div>
    );
}