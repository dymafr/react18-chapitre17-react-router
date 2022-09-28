import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProfileOverview from "./pages/Profile/pages/ProfileOverview/ProfileOverview";
import ProfileData from "./pages/Profile/pages/ProfileData/ProfileData";
import { homepageLoader } from "./loaders/homepageLoader";
import { rootLoader } from "./loaders/rootLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        index: true,
        loader: homepageLoader,
        errorElement: <ErrorPage />,
        element: <Homepage />,
      },
      {
        path: "/profile/:id/:name",
        caseSensitive: true,
        element: <Profile />,
        children: [
          {
            index: true,
            element: <ProfileOverview />,
          },
          {
            path: "data",
            element: <ProfileData />,
          },
        ],
      },
      {
        path: "/profile/*",
        element: <Profile />,
      },
    ],
  },
]);
