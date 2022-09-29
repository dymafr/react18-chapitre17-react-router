import { createBrowserRouter, redirect } from "react-router-dom";
import App from "./App";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProfileOverview from "./pages/Profile/pages/ProfileOverview/ProfileOverview";
import ProfileData from "./pages/Profile/pages/ProfileData/ProfileData";
import { profileLoader } from "./loaders/profileLoader";
import { rootLoader } from "./loaders/rootLoader";
import ProfileForm from "./pages/Profile/pages/ProfileForm/ProfileForm";
import { profileFormAction } from "./actions/profileFormAction";

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
