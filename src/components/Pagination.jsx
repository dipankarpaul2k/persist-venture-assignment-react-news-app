// import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Previous
      </button>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-4 py-2 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
