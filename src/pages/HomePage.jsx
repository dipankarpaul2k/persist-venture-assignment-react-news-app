import { useState, useEffect } from "react";

import { useGetNewsListQuery } from "../features/news/newsApi";
import { CategoryList, NewsList } from "../components";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("General");

  const { data, error, isLoading, isFetching } = useGetNewsListQuery({
    page,
    category: selectedCategory,
  });

  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  return (
    <div>
      <div className="pt-4 px-4">
        <CategoryList
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <NewsList
        articles={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default HomePage;
