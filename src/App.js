import React from"react";
import FullName from "../src/Profile/FullName";
import Profession from "../src/Profile/Profession";
import Bio from "../src/Profile/Bio";
import HandleName from "../src/Profile/HandleName";

function App () {
  const HandleEvent =(abc)=>{
    return(
      alert(`Hello ${abc}`)
    )
  }
  return(
    <div>
      <FullName FirstName ="Oussema"
      LastName="BenHriz"
      />
    <Profession/>
    <Bio/>
    <HandleName HandleEvent={HandleEvent}FirstName="Oussema"/>
    

    </div>
  )
}
export default App;