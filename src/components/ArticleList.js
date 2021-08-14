import React from 'react';

const ImageList = ({ articles }) => {
  const renderedList = articles.map(article => {
    return (
      <div>
        <img src={article.urlToImage} className="ui large rounded image" alt={article.title} />
        <h3>{article.title}</h3>
        <p>From: {article.source.name}</p>
        <p>By: {article.author}</p>
        <p><strong>{article.description}</strong></p>
        <a href={article.url} target="_blank" rel="noreferrer" className="ui button">Link</a>
        <div class="ui divider"></div>
      </div>
    );
  });

  return (
    <div>
      {renderedList}
    </div>
  );
};

export default ImageList;