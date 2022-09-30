import { createBrowserRouter, resolvePath } from "react-router-dom";
import { lazy } from "react";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { profileLoader } from "./loaders/profileLoader";
import { rootLoader } from "./loaders/rootLoader";
import { profileFormAction } from "./actions/profileFormAction";

const Homepage = lazy(() => import("./pages/Homepage/Homepage"));
const Profile = lazy(() => import("./pages/Profile/Profile"));
const ProfileOverview = lazy(() =>
  import("./pages/Profile/pages/ProfileOverview/ProfileOverview")
);
const ProfileData = lazy(() =>
  import("./pages/Profile/pages/ProfileData/ProfileData")
);
const ProfileForm = lazy(() =>
  import("./pages/Profile/pages/ProfileForm/ProfileForm")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: rootLoader,
    children: [
      {
        index: true,
        errorElement: <ErrorPage />,
        element: <Homepage />,
      },
      {
        path: "/profile",
        loader: profileLoader,
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
          {
            path: "form",
            action: profileFormAction,
            element: <ProfileForm />,
          },
        ],
      },
      // {
      //   path: "/profile/*",
      //   element: <Profile />,
      // },
    ],
  },
]);
