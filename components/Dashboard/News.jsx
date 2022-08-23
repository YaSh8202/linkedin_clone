import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const fetchNews = async () => {
      const res = await axios.get(
        `https://newsdata.io/api/1/news?apikey=pub_10524f512836f134dd9cc42ed139a6e3e63b9&country=in&language=en&category=technology`
      );
      const newsResult = res.data.results;
      const reqNews = [];

      for (let i = 0; i < 5; i++) {
        reqNews.push({
          title: newsResult[i].title,
          pubDate: newsResult[i].pubDate,
        });
      }

      setNews(reqNews);
    };
    fetchNews();
  }, []);

  return (
    <div className="bg-white flex flex-col rounded-lg p-3">
      <div className="flex flex-row justify-between ">
        <h3 className="text-lg font-bold">LinkedIn News</h3>
        <AiFillInfoCircle size={24} />
      </div>
      <ul className="list-decimal flex flex-col gap-3 mt-4">
        {news.map((n, i) => (
          <li className="flex flex-col w-full " key={n.pubDate}>
            <p className=" text-gray-900 font-medium text-ellipsis overflow-hidden w-full whitespace-nowrap">
              {n.title}
            </p>
            <div className="text-gray-600">{`${i} hours ago`}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
