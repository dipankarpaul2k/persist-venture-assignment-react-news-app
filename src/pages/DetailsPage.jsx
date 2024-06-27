import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";

import useFetchNews from "../hooks/useFetchNews";
import { formatTime } from "../utils/helperFns";
import { Image, SkeletonNews } from "../components";

export default function DetailsPage() {
  // Get the URL parameter for the news article
  const { encodedUrl } = useParams();
  const url = decodeURIComponent(encodedUrl);

  // Fetch the news article data
  const { loading, error, data: article } = useFetchNews(url);
  // console.log(article);

  // Sanitize the HTML content of the article
  const sanitizeHtml = DOMPurify.sanitize(article?.content, {
    FORBID_TAGS: ["ul", "li", "a", "header"],
  });
  const authorsLength = article?.authors.length;

  // Scroll to the top of the page when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // Display loading skeleton while data is loading
  if (loading) {
    return (
      <>
        <div>
          <SkeletonNews />
        </div>
      </>
    );
  }

  // Display error message if an error occurs
  if (error) {
    console.log(error);
    return (
      <>
        <div>Error occurred: {error?.message}</div>
      </>
    );
  }

  // Display the news article details // bg-[#D7E0E9] bg-[#edf5fe]
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-[#D7E0E9] text-gray-800">
      <div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded">
        {/* image container */}
        <div className="w-full h-60 sm:h-96 overflow-hidden rounded">
          <Image
            src={article?.thumbnail}
            alt={article?.title}
            title={article?.title}
            className="w-full bg-gray-500"
          />
        </div>
        {/* news details */}
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-3xl sm:px-10 sm:mx-12 lg:rounded-md bg-[#edf5fe]">
          {/* content header */}
          <div className="space-y-2">
            {/* title */}
            <Link
              rel="noopener noreferrer"
              to={article?.url}
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {article?.title}
            </Link>
            {/* publisher */}
            <div className="flex items-center justify-between">
              <Link
                className="flex items-center gap-2"
                to={article?.publisher?.url}
                target="_blank"
              >
                <span className="h-6 sm:h-8 w-6 sm:w-8 rounded-full overflow-hidden">
                  <Image
                    src={article?.publisher?.favicon}
                    alt={article?.publisher?.name}
                    title={article?.publisher?.name}
                  />
                </span>
                <span>{article?.publisher?.name}</span>
              </Link>
              <span>{formatTime(article.date)}</span>
            </div>
            {/* authors */}
            <p className="text-xs text-gray-600">
              By{" "}
              {article?.authors?.map((author, idx) => (
                <span key={author}>
                  {author}
                  {idx === authorsLength - 1 ? "" : ","}
                </span>
              ))}
            </p>
          </div>

          {/* article content */}
          <article
            className="article_content text-gray-800"
            dangerouslySetInnerHTML={{ __html: sanitizeHtml }}
          ></article>

          {/* keywords */}
          <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
            {article?.keywords.map((keyword, idx) => (
              <Link
                key={idx}
                rel="noopener noreferrer"
                to={`/search/${keyword}`}
                className="px-3 py-1 rounded-sm hover:underline bg-blue-500 text-gray-50"
              >
                <span>#{keyword}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
