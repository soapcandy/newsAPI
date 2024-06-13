import "../styles/newsItem.css";

function NewsItem({ item }) {
  return (
    <div className="container">
      <img className="image" src={item.urlToImage} alt="thumbnail" />
      <div>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <div className="title">{item.title}</div>
        </a>
        <div>{item.description}</div>
      </div>
    </div>
  );
}
export default NewsItem;
