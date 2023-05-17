import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/news.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("currency");

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=${query}`,
      headers: {
        "X-Api-Key": `${process.env.REACT_APP_NEWS_API_KEY}`,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        console.log(response.data);
        setArticles(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="newsPage">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6d98ba"
          fillOpacity="1"
          d="M0,96L34.3,85.3C68.6,75,137,53,206,74.7C274.3,96,343,160,411,202.7C480,245,549,267,617,261.3C685.7,256,754,224,823,213.3C891.4,203,960,213,1029,213.3C1097.1,213,1166,203,1234,192C1302.9,181,1371,171,1406,165.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <h1 className="pageHeader">News</h1>
      <div className="newsContainer">
        {articles.length > 0 ? (
          articles.map((article) =>
            article.urlToImage ? (
              <div className="articleContainer" key={article.source.id}>
                <img className="articleImg" src={article.urlToImage} />
                <h1 className="articleTitle">{article.title}</h1>
                <h2 className="articleAuthor">By: {article.author}</h2>
                <h3 className="articleDesc">{article.description}</h3>
                <a
                  className="articleLink"
                  href={article.url}
                  target="_blank"
                  rel="nofollow"
                >
                  Read More
                </a>
              </div>
            ) : null
          )
        ) : (
          <div>Not found</div>
        )}
      </div>
    </div>
  );
};

export default News;