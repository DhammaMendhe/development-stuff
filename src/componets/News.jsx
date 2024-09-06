import React, { useState, useContext } from "react";
import NewsItem from "./NewsItem";
import newscontext from "../context/newscontext";
import SingleNewsItem from "./SingleNewsItem";
export default function News(props) {
  // const [news,setnews] = useState(intialnews)

  const context = useContext(newscontext);
  const { news } = context;
  const { showalert } = props;
  return (
    <div>
      <div className="itemcontianer d-flex flex-wrap gap-3">
        
        {news.map((item, index) => {
          if (item.author && item.title && item.urlToImage) {
            //  console.log(item.author);
            return (
              <NewsItem
                key={index}
                img={item.urlToImage}
                title={item.title ? item.title.slice(0, 40) + "..." : " "}
                description={
                  item.description
                    ? item.description.slice(0, 70) + "....."
                    : "no description"
                }
                author={item.author}
                SingleNewsItem={SingleNewsItem}
              />
            );
          }
        })}
      </div>

      {/* {console.log(news)} */}
      <button type="button" className="btn btn-success" onClick={showalert}>
        up
      </button>
      
    </div>
  );
}
