//這裡做為倒數器的網頁
let tiStop =null;
let total =0;//剩餘時間(sec)

function timeoutput(secinput){
    const min =Math.floor(secinput/60);//宣告分秒變數 分=總時間/60取整數  秒=總時間/60取餘數
    const sec = secinput % 60;
    return({min ,sec});
}

exports.start =(req, res) =>{
    const {mininput, secinput} =req.body;//取得資料
    total =mininput *60 +secinput;

    // 設定 HTTP 標頭，啟用 chunked 傳輸
    res.writeHead(200, {
        "Content-Type": "application/json",
        "Transfer-Encoding": "chunked"
    });

    tiStop = setInterval(() => {
            if (total <= 0) {
                clearInterval(tiStop);//清除計時器
                tiStop= null;//將計時器設置為空值
                //return res.json({ message: "時間到", remaining: timeoutput(0) });
                res.write(JSON.stringify({ message: "時間到", remaining: timeoutput(0) }) + "\n");
                return res.end(); // 結束回應
                //res.end();
                }
            total -= 1 ;//總時間-1
            res.write(JSON.stringify({ remaining: timeoutput(total) }));
            //res.json({remaining : timeoutput(total)});
       }, 1000);
}

exports.stop =(req, res) =>{
    if(tiStop){
        clearInterval(tiStop);
        tiStop =null;
    }
    res.json({message:"計時停止" ,remaining: timeoutput(total)});
}


/*export default function Timedown(){
    function rundown(){//偵測按鈕 並設置tiStop為true
        const mininput =parseInt(document.getElementById('min').value);//取得min值並轉為整數
        const secinput =parseInt(document.getElementById('sec').value);
        setTotal(mininput*60 + secinput);//總時間=分鐘轉為秒數並加
        tiStop(true);
    }
    const [total ,setTotal] =useState(0); //總時間狀態
    const [ti ,tiStop] =useState(false);

    useEffect(() => {
        let timer;
        if (ti) {//控制計時器開關
            timer = setInterval(() => {
                setTotal((prevTotal) => {
                    if (prevTotal == 0) {
                        clearInterval(timer);
                        tiStop(false);
                        alert("時間到");
                        return 0;
                    }
                    return prevTotal - 1;//總時間-1
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [ti]);

    const minn = Math.floor(total / 60);//宣告分秒變數 分=總時間/60取整數  秒=總時間/60取餘數
    const secc = total % 60;
}*/
