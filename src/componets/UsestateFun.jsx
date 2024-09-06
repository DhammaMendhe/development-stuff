import React, { useState } from 'react'

export default function UsestateFun() {
     // const result = asyncCall

  var [count,setcount] = useState(0);

  // let isterm = true
  const handleClick = () => {
    setcount(count+1);
  }
// var d ="";
  const handleClick1 = () => {
    setcount(count-1);

  
  }
  return (
    <div>
          <p>{count}</p>
      <button onClick={handleClick}>button++</button>
      <button onClick={handleClick1}>button--</button>
   <p>  {  count <= -5 ? "limit exceeds.." : null
      }</p>

    </div>
  )
}
