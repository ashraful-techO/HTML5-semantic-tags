import { useRef } from "react";

function InputFocus(){
    const inputRef = useRef();

    return(
        <div>
            <input ref={inputRef} />
            <button onClick={()=> inputRef.current.focus()}>Focus Input</button>
        </div>
    )
}

export default InputFocus