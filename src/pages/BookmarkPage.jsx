import { useEffect } from "react";
import { useState } from "react";
import { NewsList } from "../components";

const BookmarkPage = () => {
  // State variables for bookmarks, pagination, and items per page
  const [bookmarks, setBookmarks] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Load bookmarks from localStorage when component mounts
  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("newsly_bookmarks")) || [];
    setBookmarks(savedBookmarks);
  }, [bookmarks]);

  // Calculate index of last and first item for pagination
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookmarks?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <h1 className="text-xl font-medium sm:font-semibold lg:font-bold px-4 pt-4">
        Bookmarked News
      </h1>
      {bookmarks.length === 0 ? (
        <div className="min-h-[70vh] flex items-center justify-center flex-col gap-1 sm:gap-3 text-center">
          <h1 className="text-xl sm:text-2xl font-bold">
            You have no bookmarks yet.
          </h1>
          <p className="text-lg sm:text-xl font-semibold">
            Start adding your favourite news items to see them here.
          </p>
        </div>
      ) : (
        <NewsList
          articles={currentItems}
          error={null}
          isLoading={null}
          isFetching={null}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default BookmarkPage;
