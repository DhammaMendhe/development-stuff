import { React, useContext, useState } from "react";
import newscontext from "../context/newscontext";
import Singlenews from "./Singlenews";
import { useNavigate } from "react-router-dom";

export default function NewsItem(props) {
  const context = useContext(newscontext);
  const { singleNews } = context;

  const navigate = useNavigate();

  // const [compo, setcompo] = useState(false);
  const handleclick = (auther) => {
    console.log(auther)
    // setcompo(true);
    singleNews(auther);
    
    navigate("/Singlenews");
  };

  return (
    <div className="">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="primary">author : {props.author}</p>
        </div>
        <div className="btn">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              handleclick(props.author);
            }}
          >
            read more...
          </button>
        </div>
      </div>
    </div>
  );
}
