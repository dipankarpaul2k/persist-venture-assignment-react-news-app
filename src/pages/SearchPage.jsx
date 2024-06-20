import { useState } from "react";
import { useParams } from "react-router-dom";

import { useSearchNewsQuery } from "../features/news/newsApi";
import { NewsList } from "../components";

const SearchPage = () => {
  // State to manage the current page number
  const [page, setPage] = useState(1);
  let { keywords } = useParams();

  // Fetch news list based on search keywords
  const { data, error, isFetching, isLoading } = useSearchNewsQuery({
    page,
    query: keywords,
  });

  return (
    <>
      <h1 className="text-xl font-medium sm:font-semibold lg:font-bold px-4 pt-4">
        Search results for {keywords}
      </h1>
      <NewsList
        articles={data}
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default SearchPage;
