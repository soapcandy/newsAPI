import { useState } from "react";
import NewsList from "./components/news/NewsList";
import axios from "axios";
import { useEffect } from "react";
import Categories from "./components/categories/Categories";

function App() {
  const [data, setData] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  console.log(selectCategory);

  useEffect(() => {
    const query = selectCategory === "all" ? "" : `&category=${selectCategory}`;
    const news = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6b16364a82fb4060a0c0a421d9dff9ce`
        );
        setData(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    news();
  }, [selectCategory]);

  return (
    <>
      <Categories setSelectCategory={setSelectCategory} />
      <NewsList data={data} />
    </>
  );
}

export default App;
