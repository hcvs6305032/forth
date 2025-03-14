import {useEffect, useState} from 'react';
import axios from "axios";


export default function useLetsgo(sum=1){
    const [a ,setA] =useState(sum);
    const indexurl ="http://localhost:5000/api/count";

    useEffect(()=>{
        async function fetchcatch(){
            const response = await axios.get(indexurl);
            setA(response.data.count);
        }
        fetchcatch();
    },[]);

    const cclick =async(act)=>{
        const respon =await axios.post("http://localhost:5000/api/countup",{action:act});
        setA(respon.data.count);
    }
    return {a,cclick};
}
    /*
    function cclick(act){ //用act偵測按鈕是加還是減
        const up =document.getElementById('up');//抓取up按鈕
        const down =document.getElementById('down');//抓取down按鈕
        if (act =='up'){
            setA(a + 1);
        }
        else if(act =='down'){
            setA(a - 1);
        }
    }*/
    
    

