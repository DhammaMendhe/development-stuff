import React, { useState } from 'react'
import newscontext from './newscontext'
// import data from '../jsfile/data'

const NewsState = (props) => {

    const intialnews = [];

    const [news, setnews] = useState([]);

    let success = false;

    const newsadding = async () => {
        const url =
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=12dd6156bfb0453faa0e0496b9e9c4d6";

        try {


            const response = await fetch(url);
            const json = await response.json();
            // console.log(json);
            success = true;
            setnews(json.articles);
            // localStorage.setItem('intialnews',json.articles);
         

        } catch (error) {
            console.log(error,success, "bad request");
        }
    };

    const singleNews = (author) => {

let value = news.find((item)=>item.author === author);
if (value) {
    console.log(value, "Found news item");
} else {
    console.log("No news found for this author");
}
console.log(value,"notestates")

    }




    return (
        <newscontext.Provider value={{ news, newsadding, singleNews }}>
            {props.children}
        </newscontext.Provider>
    )
}

export default NewsState;