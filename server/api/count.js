//處理count的業務邏輯

let count =1;//初始計數值

exports.getcount = (req,res) =>{
    res.json({count});
};

exports.postcount = (req,res)=>{
    const { action } =req.body;
    if(action =="up"){
        count+=1;
    }
    else if(action =="down"){
        count-=1;
    }
    res.json({count});
};


/*
export default function useLetsgo(){
    
    const [a ,setA] =useState(1); //a是變數名稱 seta是設定a的值 useState(1)是a的初始值

    function cclick(act){ //用act偵測按鈕是加還是減
    const up =document.getElementById('up');//抓取up按鈕
    const down =document.getElementById('down');//抓取down按鈕
    if (act =='up'){
        setA(a + 1);
    }
    else if(act =='down'){
        setA(a - 1);
    }
}
    return(
        <div>
            <section>
            <h2 style={{textAlign:'center'}}>現在:{a}</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <button id ="up" onClick={() => cclick('up')} >PLUS</button>
                    <button id ="down" onClick={() => cclick('down')}>MINUS</button>    
                </div>
                <h2 style={{textAlign:'center'}}>這裡是上下按鈕</h2> 
            </section>
            
        </div>
    );
}*/