import { useState, useEffect } from "react";
import axios from "axios";

const apiurl ="http://localhost:5000/api/datatest";

const useDatatest =() =>{
    const[data, setData] =useState([]); //儲存資料
    const [loading, setLoading] =useState(true); //控制加載狀態

    //取得資料
    const fetchdata =async() =>{
        const response =await axios.get(apiurl); //api路徑
        //const datain =await response.json();
        setData(response.data);//設定獲取的資料
        setLoading(false); //加載完畢
    }

    //新增資料
    const adddata= async(username, useremail) =>{
        const response =await axios.post(apiurl, {name:username ,email: useremail});
        setData([...data, response.data]);
    }
    
    //更改資料
    const updata =async(id, username, email) =>{
        const response =await axios.put(`${apiurl}/${id}`, {name:username, email});
        setData(data.map( data =>(data.id ==id ?response.data: data)));
    }

    //刪除資料
    const dele =async(id) =>{
        await axios.delete(`${apiurl}/${id}`);
        setData(data.filter(data => data.id !==id));

    }

    useEffect(() =>{
        fetchdata();
    },[]);
    return {data, loading, fetchdata, adddata, updata, dele};

}

export default useDatatest;