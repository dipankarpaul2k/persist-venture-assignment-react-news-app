import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaArrowLeft, FaBookmark, FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

export default function Header() {
  // State to track if the search bar is visible
  const [searchVisible, setSearchVisible] = useState(false);
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Toggles the visibility of the search bar
  function handleSearchVisible() {
    setSearchVisible((prev) => !prev);
  }
  return (
    <header className="bg-[#edf5fe]">
      <nav className="flex items-center justify-between gap-4 p-3 w-full max-w-[1280px] mx-auto">
        {searchVisible ? (
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex-1">
              <SearchBar handleSearchVisible={handleSearchVisible} />
            </div>
            <button type="button" onClick={handleSearchVisible}>
              <FaArrowLeft />
            </button>
          </div>
        ) : (
          <>
            <Link to="/" className="text-2xl sm:text-3xl font-bold">
              Newsly
            </Link>
            <div className="flex-1 max-sm:hidden">
              <SearchBar />
            </div>
            <div className="flex items-center justify-between gap-4">
              {/* search button */}
              <button
                type="button"
                className="sm:hidden"
                onClick={handleSearchVisible}
              >
                <FaSearch />
              </button>
              {/* bookmark button */}
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
