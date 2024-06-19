import NewsItem from "./NewsItem";
import Pagination from "./Pagination";

const NewsList = ({ articles, error, isFetching, page, setPage }) => {
  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  return (
    <div className="p-4">
      <div className="grid gap-4">
        {articles.data.map((article) => (
          <NewsItem key={article.url} article={article} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default NewsList;
