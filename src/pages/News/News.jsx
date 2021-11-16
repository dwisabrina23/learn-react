import { React, useEffect, useState } from "react";
import Card from "../../components/Card";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function News() {
  const URL =
    "https://newsapi.org/v2/top-headlines?country=id&apiKey=5f485a2cbdd6436bb5f2b9398f6ae287";
  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleFetch = async () => {
      let result;
      try {
        result = await axios.get(URL);
        setIsLoaded(true);
        // console.log(result.data.articles);
        setNews(result.data.articles);
      } catch (err) {
        setIsLoaded(true);
        setError(err);
      }
    };
    handleFetch();
  },[]);
  
  if (error){
    return <div>Erorr: {error}</div>
  } else if (!isLoaded){
    return <div>Loading...</div>
  }
  return (
    <div>
	    <h1 className="display-4 text-center">NEWS</h1>
      <div
        className="container-fluid d-flex justify-content-around"
        style={{ top: "20px" }}
      >
        <div className="row m-3">
          {news.map((item) => (
            <Card
              key={uuidv4()}
              title={item.title}
              content={item.content}
              url={item.url}
              image={item.urlToImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
