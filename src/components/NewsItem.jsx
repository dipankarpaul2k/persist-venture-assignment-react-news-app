import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

import { addBookmark, removeBookmark } from "../features/news/newsSlice";
import Image from "./Image";
import NewsItemHeader from "./NewsItemHeader";
import NewsItemFooter from "./NewsItemFooter";

const NewsItem = ({ article, index }) => {
  const dispatch = useDispatch();
  // Get the list of bookmarks from the Redux store
  const bookmarks = useSelector((state) => state.news.bookmarks);
  // Check if the current article is bookmarked
  const isBookmarked = bookmarks?.some(
    (bookmark) => bookmark.url === article.url
  );
  // console.log(bookmarks);
  // console.log(isBookmarked);

  // Encode the article URL for use in the link
  const encodedUrl = encodeURIComponent(article.url);

  // Handler to add or remove bookmarks
  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(article.url));
    } else {
      dispatch(addBookmark(article));
    }
  };

  // Determine the flex direction based on the index (alternate rows)
  const flexDirection = index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <div
      className={twMerge(
        "p-4 border bg-[#edf5fe] flex flex-col gap-4 overflow-hidden rounded-lg shadow-md md:max-h-52",
        flexDirection
      )}
    >
      {/* news image */}
      <Link
        to={`/news/${encodedUrl}`}
        className="h-full w-full md:w-1/4 rounded-md overflow-hidden"
      >
        <Image
          src={article.thumbnail}
          alt={article.title}
          title={article.title}
        />
      </Link>
      {/* news details */}
      <div className="flex flex-col flex-1">
        <NewsItemHeader article={article} />
        <Link to={`/news/${encodedUrl}`} className="flex-1 py-2">
          <h2 className="text-lg font-bold md:line-clamp-1">{article.title}</h2>
          <p className="line-clamp-2">{article.excerpt}</p>
        </Link>
        <NewsItemFooter
          article={article}
          handleBookmark={handleBookmark}
          isBookmarked={isBookmarked}
        />
      </div>
    </div>
  );
};

export default NewsItem;
