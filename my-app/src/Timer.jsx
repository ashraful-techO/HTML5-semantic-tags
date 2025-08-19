import { useEffect, useState } from "react";


function Timer(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=> setCount(c=>c+1),1000);
        return ()=> clearInterval(timer);
    },[]);

    return <p>Time: {count}</p>
}

export default Timer