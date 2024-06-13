import NewsItem from "./NewsItem";

function NewsList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <NewsItem key={item.id} item={item} />
      ))}
    </div>
  );
}
export default NewsList;
