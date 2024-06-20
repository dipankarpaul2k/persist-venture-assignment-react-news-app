import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

const NewsList = ({
  articles,
  error,
  isLoading,
  page,
  setPage,
}) => {
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="p-4">
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
