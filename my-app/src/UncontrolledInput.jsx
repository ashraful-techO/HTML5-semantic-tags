// import { useRef } from "react";

import { useRef } from "react";

// function UncontrolledInput(){
//     const inputRef = useRef();
//     const showValue = ()=> alert(inputRef.current.value);

//     return(
//         <>
//         <input ref={inputRef} />
//         <button onClick={showValue}>Show Value</button>
//         </>
//     );
// }

// export default UncontrolledInput;

function UncontrolledInput(){
    const nameRef = useRef();
    const suggestionRef = useRef();


    const handleSubmit = (e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const suggestion = suggestionRef.current.value;
        alert(`Suggestion from ${name}: ${suggestion}`);
        nameRef.current.value = '';
        suggestionRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled Suggestion</h2>
            <input type="text" placeholder="Your Name" ref={nameRef} />
            <br />

            <textarea placeholder="Your Suggestion" ref={suggestionRef}></textarea>
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledInput;