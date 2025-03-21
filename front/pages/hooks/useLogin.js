import { useEffect, useState } from "react";
import axios from "axios";
import {useRouter } from "next/router";


const apiurl ="http://localhost:5000/api/login";

const useLogin =() =>{
    const [user, setUser] =useState(null);
    const [error, setError] =useState(null);
    const  router =useRouter();

    useEffect(() =>{
        const storeuser =localStorage.getItem("user");
        setUser(JSON.parse(storeuser));
    },[]);

    const login =async (email, password)=>{
        try{
            const response =await axios.post(apiurl, {email, password});
            setUser(response.data.user);
            localStorage.setItem("user", JSON.stringify(response.data.user)); //儲存資訊到localstorage讓其他頁面讀取
            router.push("/"); //跳轉index.tsx
        }catch(err){
            setError(err.response?.data?.message ||"登入失敗");
        }
    }

    return {user, error, login};
}

export default useLogin;