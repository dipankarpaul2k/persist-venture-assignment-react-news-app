import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import {
  BookmarkPage,
  DetailsPage,
  HomePage,
  SearchPage,
  PageNotFound,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "search/:keywords",
        element: <SearchPage />,
      },
      {
        path: "bookmarks",
        element: <BookmarkPage />,
      },
      {
        path: "news/:encodedUrl",
        element: <DetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
