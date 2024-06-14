import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import CreateBooks from "./components/CreateBooks.jsx";
import EditBook from "./components/EditBook";
import ShowBook from "./components/ShowBook.jsx";

const App = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/books/create",
      element: <CreateBooks />,
    },
    {
      path: "/books/edit/:id",
      element: <EditBook />,
    },
    {
      path: "/books/details/:id",
      element: <ShowBook />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRoute} />
    </div>
  );
};

export default App;
