import { useState } from "react";


function ControlledInput(){
    const [name,setName]= useState('');
    const [feedBack, setFeedBack] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert(`Thanks "${name}", you said "${feedBack}"`);
        setName('');
        setFeedBack('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Controlled FeedBack</h2>
        <input 
        type="text"
        placeholder="your name"
        value={name}
        onChange={(e)=> setName(e.target.value)}
         />

         <br />

         <textarea 
         placeholder="your feedback"
         value={feedBack}
         onChange={(e)=> setFeedBack(e.target.value)}
         ></textarea>
         <br />
         <button type="submit">Submit</button>
         <p>Live Preview: {name} says, {feedBack}</p>
        </form>
    );

}

export default ControlledInput;