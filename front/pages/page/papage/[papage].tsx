import {useRouter} from "next/router";
import Link from "next/link";

export default function Papage(){
    const rorouter = useRouter();
    const {papage} = rorouter.query;
    return(
        <div>
            <h1>這是{papage}</h1>
            <Link href='../../'>回首頁</Link>
        </div>
    )
}