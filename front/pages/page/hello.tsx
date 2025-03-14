import React, { useEffect } from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export default function Hello(){
    
    return(
        <div style={{textAlign:'center'}}>
            <h1>Hello World</h1>
            <Link href="/"><h1>回到首頁</h1></Link>
        </div>
    );
}