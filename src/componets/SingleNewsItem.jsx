import React from "react";

export default function SingleNewsItem(props) {
  return (
    <div>
      <h2>title : {props.title}</h2>
      <p>description :{props.description}</p>
      <p> author :{props.author}</p>
    </div>
  );
}
