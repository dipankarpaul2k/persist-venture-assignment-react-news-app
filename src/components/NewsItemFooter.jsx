import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { TiUserOutline } from "react-icons/ti";

export default function NewsItemFooter({
  article,
  handleBookmark,
  isBookmarked,
}) {
  const authorsLength = article?.authors.length;
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TiUserOutline />
          {article.authors?.map((author, idx) => (
            <span key={author}>
              {author}
              {idx === authorsLength - 1 ? "" : ","}
            </span>
          ))}
        </div>
        <div>
          <button type="button" onClick={handleBookmark}>
            {isBookmarked ? <BsBookmarkFill /> : <BsBookmark />}
          </button>
        </div>
      </div>
    </>
  );
}
