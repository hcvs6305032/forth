import React from "react";
import Link from "next/link";
import Timedown from "./api/timedown.js";


export default function Time(){
    return(
        <div>
        <h1>這裡是計時器</h1>
        <Timedown/>
        <Link href="/"><h1>回到首頁</h1></Link>
        </div>
    );
}