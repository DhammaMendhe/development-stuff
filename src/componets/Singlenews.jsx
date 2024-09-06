import { React, useContext } from "react";
import newscontext from "../context/newscontext";
import SingleNewsItem from "./SingleNewsItem";
// import data from "../jsfile/data";
export default function Singlenews(props) {
  const context = useContext(newscontext);
  const { news, singleNews } = context;

  //   const { value } = singleNews;
  return (
    <div>
      <h1>single news </h1>
      {console.log(singleNews.value, "single sgtate")}
      {news.map((item, index) => {
        // if (item.author === value) {
        return (
          <SingleNewsItem
            key={index}
            // title={"titile"}
            title={item.title}
            description={item.description}
            author={item.author}
          />
        );
        // }
      })}
    </div>
  );
}
