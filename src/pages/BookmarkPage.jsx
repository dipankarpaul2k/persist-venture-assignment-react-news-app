import { useEffect } from "react";
import { useState } from "react";
import { NewsList } from "../components";

const BookmarkPage = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("newsly_bookmarks")) || [];
    setBookmarks(savedBookmarks);
  }, [bookmarks]);

  // console.log(bookmarks);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookmarks?.slice(indexOfFirstItem, indexOfLastItem);
  const noPagination = bookmarks?.length > 10 ? true : false;

  return (
    <>
      <h1 className="text-xl font-medium sm:font-semibold lg:font-bold px-4 pt-4">
        Bookmarked News
      </h1>
      {bookmarks.length === 0 ? (
        <div className="min-h-[70vh] flex items-center justify-center flex-col gap-4">
          <h1 className="text-2xl font-bold">You have no bookmarks yet.</h1>
          <p className="text-xl font-semibold">Start adding your favourite news items to see them here.</p>
        </div>
      ) : (
        <NewsList
          articles={currentItems}
          error={null}
          isLoading={null}
          isFetching={null}
          page={page}
          setPage={setPage}
          noPagination={noPagination}
        />
      )}
    </>
  );
};

export default BookmarkPage;
