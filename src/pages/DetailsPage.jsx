import { Link, useParams } from "react-router-dom";

import { useGetNewsContentQuery } from "../features/news/newsApi";

export default function DetailsPage() {
  const { encodedUrl } = useParams();
  const url = decodeURIComponent(encodedUrl);
  console.log("encodedUrl: ", encodedUrl);
  console.log("url: ", url);

  // isLoading
  const {
    data: article,
    error,
    isFetching,
  } = useGetNewsContentQuery({
    url: encodedUrl,
  });
  console.log(article);

  const authorsLength = article?.data?.authors.length;

  if (isFetching) return <div>Loading...</div>;
  if (error) {
    console.log(error);
    return (
      <>
        <div>Error occurred: {error.message}</div>
      </>
    );
  }

  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={article?.data?.thumbnail}
          alt={article?.data?.title}
          title={article?.data?.title}
          className="w-full h-60 sm:h-96 bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
          <div className="space-y-2">
            <Link
              rel="noopener noreferrer"
              to={article?.data?.url}
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {article?.data?.title}
            </Link>
            <p className="text-xs text-gray-600">
              By
              {article?.data?.authors?.map((author, idx) => (
                <span key={author}>
                  {author}
                  {idx === authorsLength - 1 ? "" : ","}
                </span>
              ))}
            </p>
          </div>
          {/* article */}
          <article className="text-gray-800">{article?.data?.content}</article>
          {/*  */}
          <div>
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50"
              >
                #MambaUI
              </a>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">Related posts</h4>
              <ul className="ml-4 space-y-1 list-disc">
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Nunc id magna mollis
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Duis molestie, neque eget pretium lobortis
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:underline"
                  >
                    Mauris nec urna volutpat, aliquam lectus sit amet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
