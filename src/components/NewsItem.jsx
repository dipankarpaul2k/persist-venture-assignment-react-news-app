
// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmark, removeBookmark } from '../features/news/newsSlice';

const NewsItem = ({ article }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.news.bookmarks);
  const isBookmarked = bookmarks.some((bookmark) => bookmark.url === article.url);

  const handleBookmark = () => {
    if (isBookmarked) {
      dispatch(removeBookmark(article.url));
    } else {
      dispatch(addBookmark(article));
    }
  };

  return (
    <div className="p-4 border rounded bg-[#edf5fe]">
      <h2 className="text-lg font-bold">{article.title}</h2>
      <p>{article.description}</p>
      {/* <button
        onClick={handleBookmark}
        className={`mt-2 px-4 py-2 text-white ${isBookmarked ? 'bg-red-500' : 'bg-blue-500'}`}
      >
        {isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
      </button> */}
    </div>
  );
};

export default NewsItem;
