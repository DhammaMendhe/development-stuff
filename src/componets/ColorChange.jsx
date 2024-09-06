import React, { useState } from "react";

export default function ColorChange() {
  const [color, setcolor] = useState("#FF5733");
  const [count, setcount] = useState(0);

  const handleClick = () => {
    // setcount(count + 1);
    setcolor(hexColor);
  };

  const hexColor = () => {
    var color = "#";
    var hex = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random()* 16)];
      console.log(color)
    }
    return color;
  };

const changeColor =   setInterval(handleClick, 2000);



const handleClick3 =()=>{
    console.log(0)
       

}
//   const handleClick2 = setInterval(handleClick, 2000);
//   const handleClick2 = clearInterval(hexColor,2000);

  return (
    <div style={{ backgroundColor: color }}>
      <h1>this app is used to change color simultaniously</h1>
      
      <button onClick={changeColor}>click me</button>
      <button onClick={handleClick3}>click me</button>
    </div>
  );
}
