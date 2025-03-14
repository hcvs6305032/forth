// pages/dataprismatest.tsx
import React from 'react';
import Link from 'next/link';

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

export default function Datatest({ users }: Props) {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id} - {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <Link href="/">Go back to homepage</Link>
    </div>
  );
}

