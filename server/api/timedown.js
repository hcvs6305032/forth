//這裡做為倒數器的網頁
import React from "react";
import {useEffect, useState} from 'react';




export default function Timedown(){
    function rundown(){//偵測按鈕 並設置tiStop為true
        const mininput =parseInt(document.getElementById('min').value);//取得min值並轉為整數
        const secinput =parseInt(document.getElementById('sec').value);
        setTotal(mininput*60 + secinput);//總時間=分鐘轉為秒數並加
        tiStop(true);
    }
    const [total ,setTotal] =useState(0); //總時間狀態
    const [ti ,tiStop] =useState(false);

    useEffect(() => {
        let timer;
        if (ti) {//控制計時器開關
            timer = setInterval(() => {
                setTotal((prevTotal) => {
                    if (prevTotal == 0) {
                        clearInterval(timer);
                        tiStop(false);
                        alert("時間到");
                        return 0;
                    }
                    return prevTotal - 1;//總時間-1
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [ti]);

    const minn = Math.floor(total / 60);//宣告分秒變數 分=總時間/60取整數  秒=總時間/60取餘數
    const secc = total % 60;
    
    return(
        <div>
        <section>
        <input type="number" placeholder='分' id="min" style={{Align:'center'}}></input>
        <input type="number" placeholder='秒' id="sec"style={{Align:'center'}}></input>
        <button id="ti" style={{textAlign:'center'}} onClick={rundown}>計時開始</button>
        <h1>{String(minn).padStart(2,'0')}:{String(secc).padStart(2,'0')}</h1>
        </section>
        </div>
    )
}
