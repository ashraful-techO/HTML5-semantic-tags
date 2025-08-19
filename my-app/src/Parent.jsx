import { useState } from "react";
import Child from "./Child";

function Parent(){
    const [value, setValue] = useState('');

    return(
        <div>
            <Child value={value} setValue={setValue}/>
            <p>Value from child: {value}</p>
        </div>
    );
}

export default Parent;