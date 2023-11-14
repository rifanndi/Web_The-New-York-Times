import React from 'react';

const DetailArticle = ({ article }) => {
  return (
    <div>
      <h2 className="text-xl font-bold">{article.headline.main}</h2>
      <p>
        <strong>Penulis:</strong> {article.byline.original} | <strong>Tanggal Rilis:</strong> {article.pub_date}
      </p>
      <p>{article.snippet}</p>
      <a
        href={article.web_url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 bg-blue-500 text-white hover:bg-blue-600 transition-all rounded"
      >
        Read Full Article
      </a>
    </div>
  );
};

export default DetailArticle;