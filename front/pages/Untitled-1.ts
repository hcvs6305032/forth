import React from "react";
import Link from "next/link";

export default function Hello(){
    return(
        <div style={{textAlign:'center'}}>
            <h1> Good Bye</h1>
            <Link href="/"><h1>回到首頁</h1></Link>
        </div>
    );
}