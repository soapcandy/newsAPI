function Categories({ setSelectCategory }) {
  const category = [
    {
      name: "전체",
      value: "all",
    },
    {
      name: "비즈니스",
      value: "business",
    },
    {
      name: "엔터테이먼트",
      value: "entertainment",
    },
    {
      name: "헬스",
      value: "health",
    },
    {
      name: "과학",
      value: "science",
    },
    {
      name: "스포츠",
      value: "sports",
    },
    {
      name: "기술",
      value: "technology",
    },
  ];

  const handleClick = (e) => {
    setSelectCategory(e.target.value);
  };

  return (
    <div style={{ display: "flex" }}>
      {category.map((item) => (
        <button value={item.value} onClick={handleClick}>
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default Categories;
