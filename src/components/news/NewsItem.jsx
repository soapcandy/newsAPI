function NewsItem({ item }) {
  return (
    <div style={{ display: "flex" }}>
      <img
        src={item.urlToImage}
        alt="thumbnail"
        style={{ width: "10rem", height: "10rem" }}
      />
      <div>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <div>{item.title}</div>
        </a>
        <div>{item.description}</div>
      </div>
    </div>
  );
}
export default NewsItem;
