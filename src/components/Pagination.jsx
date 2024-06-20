const Pagination = ({ page, setPage }) => {
  // Scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Handle the previous page change event
  const handlePreviousPage = () => {
    scrollToTop();
    setPage((prev) => Math.max(prev - 1, 1));
  };

  // Handle the next page change event
  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    scrollToTop();
  };

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={handlePreviousPage}
        disabled={page === 1}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:text-black"
      >
        Previous
      </button>
      <button
        onClick={handleNextPage}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
