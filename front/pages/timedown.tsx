import React, { useState } from "react";
import Link from "next/link";
import useTimedown from "./hooks/useTimedown";


export default function Time(){
    const {time , run , start, stopTimer} =useTimedown();
    const [min ,setMin] =useState(0);
    const [sec ,setSec] =useState(0);

    return(
        <div>
        <h1>這裡是計時器</h1>
        <section>
        <input type="number" placeholder='分' id="min" value={min} onChange={(e)=> setMin(Number(e.target.value))}style={{textAlign:'center'}}></input>
        <input type="number" placeholder='秒' id="sec" value={sec} onChange={(e)=> setSec(Number(e.target.value))}style={{textAlign:'center'}}></input>
        <button style={{textAlign:'center'}} onClick={()=> start(min, sec)} disabled={run}>計時開始</button>
        <button style={{textAlign:'center'}} onClick={stopTimer} disabled={!run}>計時停止</button>
        <h1>{String(time.min).padStart(2,'0')}:{String(time.sec).padStart(2,'0')}</h1>
        </section>
        <Link href="/"><h1>回到首頁</h1></Link>
        </div>
    );
}