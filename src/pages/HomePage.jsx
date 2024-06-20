import { useState, useEffect } from "react";

import { useGetNewsListQuery } from "../features/news/newsApi";
import { CategoryList, NewsList } from "../components";

const HomePage = () => {
  // State to manage the current page number
  const [page, setPage] = useState(1);
  // State to manage the selected category
  const [selectedCategory, setSelectedCategory] = useState("General");

  // Fetch news list based on selected category and page number
  const { data, error, isLoading, isFetching } = useGetNewsListQuery({
    page,
    category: selectedCategory,
  });

  // Reset the page number when the selected category changes
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
