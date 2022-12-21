import React from "react";

const HandleName =({HandleEvent,FirstName})=>{
    return(
        <button onClick={()=>HandleEvent(FirstName)} >click</button>
    )
}
export default HandleName;
