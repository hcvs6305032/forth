import React, { useState } from "react";
import Link from 'next/link';
import useLogin from "./hooks/useLogin";
import Produc from "./proshow";



export default function Login(){
    const {user, error, login} =useLogin();
    const [emailin, setEmailin] =useState("");
    const [passin, setPassin] =useState("");

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();
        await login(emailin, passin);
    }


    return(
        <div>
            <form  onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center",height: "80vh" }}>
                <h1>使用者登入</h1>
                <input type='text' 
                    value={emailin} 
                    onChange={(e)=>setEmailin(e.target.value)} 
                    placeholder="請輸入帳號"></input><br/>
                <input type='password' 
                    value={passin} 
                    onChange={(e)=>setPassin(e.target.value)} 
                    placeholder="請輸入密碼"></input><br/>
                <button type="submit">登入</button>
            </form>

            {error && <p> {error}</p>}

            {user && (
                <div>
                    <h3>歡迎, {user.name}</h3>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
}