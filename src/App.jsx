import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline">Home Page</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "search/:keywords",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline">Search Results</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "bookmarks",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline">Bookmarks</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline">About Us</h1>
      </div>
    ),
  },
  {
    path: "*",
    element: (
      <div>
        <h1 className="text-3xl font-bold underline">404</h1>
        <h2 className="text-2xl font-bold underline">Page Not Found</h2>
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
