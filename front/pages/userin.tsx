import React, { useState } from "react";
import Link from 'next/link';


export default function Login(){
    const [accountin, setAccountin] =useState();
    const [passwordin, setPasswordin] =useState();

    const login =() =>{
        
    }
    return(
        <div>
            
            <form  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center",height: "80vh" }}>
                <h1>使用者登入</h1>
                <input type='text' name={accountin} placeholder="請輸入帳號"></input><br/>
                <input type='password' name={passwordin} placeholder="請輸入密碼"></input><br/>
                <button>登入</button>
            </form>
        </div>
    );
}