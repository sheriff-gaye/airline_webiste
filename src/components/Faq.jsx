
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const Faq=({question,answer})=>{
    const [isShowing ,setisShowing]=useState(false);
    return (
        <article className="faq" onClick={()=>{setisShowing(prev=>!prev)}}>
            <div>
                <h4>{question}</h4>
                <button className="faq_icon">{isShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </div>
            {isShowing &&  <p> {answer}</p>}
            
        </article>
    )
}

export default Faq;