import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import Skeleton from "./Skeleton";

const NewsList = ({
  articles,
  error,
  isLoading,
  page,
  setPage,
  isFetching,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }

  return (
    <div className="p-4">
      {isFetching && (
        <div className="px-8 py-2 mb-4 bg-[#edf5fe] text-gray-800 rounded-lg text-center">
          <p>Please wait while we load your content...</p>
        </div>
      )}

      <div className="grid gap-4">
        {articles?.map((article, index) => (
          <NewsItem key={article.url} article={article} index={index} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default NewsList;
