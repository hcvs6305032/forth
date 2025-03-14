//[page].tsx中 url的page會是一個動態路由參數
import { useRouter } from "next/router";
import Link from "next/link";

export default function Page() {
    const router = useRouter();
    const { page } = router.query;//取得url的動態路由參數(page)
    return (
        <div>
            <h1>這是{page}</h1>
            <Link href='./papage/site'>雙層路由</Link>
        </div>
    )
}