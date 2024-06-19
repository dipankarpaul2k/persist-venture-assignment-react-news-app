import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowLeft, FaBookmark, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

export default function Header() {
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();

  function handleSearchVisible() {
    setSearchVisible((prev) => !prev);
  }
  return (
    <header className="bg-[#edf5fe]">
      <nav className="flex items-center justify-between gap-4 p-3">
        {searchVisible ? (
          <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex-1">
              <SearchBar />
            </div>
            <button type="button" onClick={handleSearchVisible}>
              <FaArrowLeft />
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold">Newsly</h1>
            <div className="flex-1 max-sm:hidden">
              <SearchBar />
            </div>
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                className="sm:hidden"
                onClick={handleSearchVisible}
              >
                <FaSearch />
              </button>
              <button
                type="button"
                onClick={() => navigate("/bookmarks")}
                className="px-4 py-2 font-semibold rounded-full bg-gray-800 text-gray-100  max-sm:bg-transparent  max-sm:text-gray-800 max-sm:p-3"
              >
                <span className="max-sm:hidden">Bookmark</span>
                <span className="sm:hidden">
                  <FaBookmark />
                </span>
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
