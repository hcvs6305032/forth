// pages/datatest.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import useDatatest from "./hooks/useDatatest";



const Datatest=() => {
  const {data, loading, fetchdata, adddata, updata, dele} =useDatatest();
  const [username, setUsername] =useState<string>("");//post上傳的資料
  const [useremail, setUseremail]= useState<string>("");//post上傳的資料
  const [edit, setEdit]= useState<number |null>(null); //確定要用put更新
  const [newname, setNewname]= useState<string>("");//put用來更新的資料
  const [newemail, setNewemail]= useState<string>("");//put用來更新的資料

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
        adddata(username, useremail);
        setUsername("");
        setUseremail("");
  };

  const handleUpdate =(id: number) =>{
    //更新資料
    updata(id, newname, newemail);
    setEdit(null); //更新後，關閉編輯
    setNewname("");//清空輸入框
    setNewemail("");
  }

  return (
    <div>
      <h1>User List</h1>
      <button onClick={fetchdata} > 加載資料</button>
      <ul>
        {data.map((data)=>{
          return(
          <li key ={data.id}>
            <h3>{data.id} - {data.name} - {data.email}</h3>
            <button onClick={() => setEdit(data.id)}>編輯</button>
            <button onClick={() => dele(data.id)}>刪除</button>
            {edit ==data.id &&(
              <div>
                <input type="text" value={newname} onChange={(e)=> setNewname(e.target.value)} placeholder='名稱'></input>
                <input type="text" value={newemail} onChange={(e)=> setNewemail(e.target.value)} placeholder='EMAIL'></input>                
                <button onClick={() => handleUpdate(data.id)}>更新</button>
              </div>
            )}
          </li>
          );
        })
        }
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='輸入名稱'></input>
        <input type="text" value={useremail} onChange={(e)=>setUseremail(e.target.value)} placeholder='輸入email'></input>
        <button type='submit'>新增</button>
      </form>
      <Link href="/">Go back to homepage</Link>
    </div>
  );
}

export default Datatest;

/*
type Props = {
  users: {
    id: number;
    name: string;
    email: string;
  }[];// 定義 users 是一個包含使用者物件的陣列
};

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/datatest'); // (請求)發送請求至 API 路由
    const users = await res.json();
    console.log(users);
  
    return {
      props: { users }, // 傳遞資料給頁面
    };
}
*/
