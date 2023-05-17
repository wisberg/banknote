import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/news.css";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("currency");
  const [loading, setLoading] = useState(false);
  const [cancelToken, setCancelToken] = useState(null);

  // useEffect(() => {
  //   const source = axios.CancelToken.source();
  //   setCancelToken(source);

  //   const fetchData = async () => {
  //     setLoading(true);
  //     setArticles([]);

  //     try {
  //       const response = await axios.get(
  //         `https://newsapi.org/v2/everything?q=${query}&pageSize=12`,
  //         {
  //           headers: {
  //             "X-Api-Key": `${process.env.REACT_APP_NEWS_API_KEY}`,
  //           },
  //           cancelToken: source.token,
  //         }
  //       );

  //       console.log(response.data);
  //       setArticles(response.data.articles);
  //     } catch (error) {
  //       if (axios.isCancel(error)) {
  //         console.log("Request canceled:", error.message);
  //       } else {
  //         console.error(error);
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  //   return () => {
  //     source.cancel("Request canceled: Component unmounted");
  //   };
  // }, [query]);

  useEffect(() => {
    setArticles([
      {
        author: "https://www.facebook.com/bbcnews",
        content:
          "After spending 10 years as a Buddhist nun in Myanmar, Coral Sunone realised that she needed some fashion help when she returned to the outside world.\r\nBut with money tight, getting assistance from a … [+5562 chars]",
        description:
          'So-called "time-banking" schemes are letting people get paid in time credits for the work they do.',
        publishedAt: "2023-05-01T00:41:46Z",
        source: { id: "bbc-news", name: "BBC News" },
        title: "The people turning time into a currency",
        url: "https://www.bbc.co.uk/news/business-65397192",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/AF47/production/_129517844_coralnew4.jpg",
      },
      {
        author: "https://www.facebook.com/bbcnews",
        content:
          "After spending 10 years as a Buddhist nun in Myanmar, Coral Sunone realised that she needed some fashion help when she returned to the outside world.\r\nBut with money tight, getting assistance from a … [+5562 chars]",
        description:
          'So-called "time-banking" schemes are letting people get paid in time credits for the work they do.',
        publishedAt: "2023-05-01T00:41:46Z",
        source: { id: "bbc-news", name: "BBC News" },
        title: "The people turning time into a currency",
        url: "https://www.bbc.co.uk/news/business-65397192",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/AF47/production/_129517844_coralnew4.jpg",
      },
      {
        author: "https://www.facebook.com/bbcnews",
        content:
          "After spending 10 years as a Buddhist nun in Myanmar, Coral Sunone realised that she needed some fashion help when she returned to the outside world.\r\nBut with money tight, getting assistance from a … [+5562 chars]",
        description:
          'So-called "time-banking" schemes are letting people get paid in time credits for the work they do.',
        publishedAt: "2023-05-01T00:41:46Z",
        source: { id: "bbc-news", name: "BBC News" },
        title: "The people turning time into a currency",
        url: "https://www.bbc.co.uk/news/business-65397192",
        urlToImage:
          "https://ichef.bbci.co.uk/news/1024/branded_news/AF47/production/_129517844_coralnew4.jpg",
      },
    ]);
    console.log(query);
  }, [query]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const inputValue = e.target.elements.searchInput.value;
    setQuery(inputValue);
    e.target.reset();
  };

  return (
    <div className="newsPage">
      <img
        id="BankNote-Img-3"
        src={require("../assets/BankNote_3Coins.png")}
        alt="Cartoon of Coins"
      />
      <img
        id="BankNote-Img-5"
        src={require("../assets/BankNote_3Coins.png")}
        alt="Cartoon of Coins"
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#6d98ba"
          fillOpacity="1"
          d="M0,96L34.3,85.3C68.6,75,137,53,206,74.7C274.3,96,343,160,411,202.7C480,245,549,267,617,261.3C685.7,256,754,224,823,213.3C891.4,203,960,213,1029,213.3C1097.1,213,1166,203,1234,192C1302.9,181,1371,171,1406,165.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <h1 className="pageHeader">News</h1>
      <div className="searchContainer">
        <h1 className="searchText">Search News:</h1>
        <div>
          <button
            className="searchButton"
            value="crypto"
            onClick={(e) => setQuery(e.target.value)}
          >
            Crypto
          </button>
          <button
            className="searchButton"
            value="fiat"
            onClick={(e) => setQuery(e.target.value)}
          >
            Fiat
          </button>
          <button
            className="searchButton"
            value="USD"
            onClick={(e) => setQuery(e.target.value)}
          >
            USD
          </button>
          <form onSubmit={handleFormSubmit}>
            <input type="text" className="searchBar" id="searchInput" />
            <button className="searchButton" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="newsContainer">
        {articles.length > 0 ? (
          articles.map((article) =>
            article.urlToImage ? (
              <div className="articleContainer" key={article.url}>
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
          <>
            {query === "" ? (
              <h1>No Results. Please search again.</h1>
            ) : (
              <div className="newsContainer">
                {[1, 2, 3].map((index) => (
                  <div className="articleContainer" key={index}>
                    <img className="articleImg loader" />
                    <h1 className="articleTitle loader loader-text-title"></h1>
                    <h2 className="articleAuthor loader loader-text"></h2>
                    <h3 className="articleDesc loader loader-text"></h3>
                    <a className="articleLink loader"></a>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default News;
