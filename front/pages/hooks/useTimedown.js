import { useState } from "react";
import axios from "axios";

export default function useTimedown(){
    const [time ,setTime] =useState({min: 0, sec: 0});
    const [run ,setRun] =useState(false);
    const timeurl ="http://localhost:5000/api/timedown/start";

    const start =async(min, sec)=>{
        const res =await axios.post(timeurl, {mininput: min, secinput: sec});
        const data = res.data;
        setTime(data.remaining);
        setRun(true);
    }
    const stopTimer =async () =>{
        const res = await axios.post("http://localhost:5000/api/timedown/stop");
        const data = res.data;
        setTime(data.remaining);
        setRun(false);
    }
    return({time ,run ,start ,stopTimer});

}