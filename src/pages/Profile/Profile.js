import { Suspense } from "react";
import { Await, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Recipes from "./components/Recipes/Recipes";

function Profile() {
  // const { id, name } = useParams();
  // const [queryParams] = useSearchParams();

  // console.log(queryParams);
  // console.log(queryParams.get("age"));

  // if (!queryParams.get("type")) {
  //   setQueryParams({ type: "person" });
  // }

  // console.log(id);
  // console.log(name);

  const { recipes } = useLoaderData();
  // const { user } = useOutletContext();

  return (
    <>
      <ul className="d-flex p-20">
        <li>
          <NavLink end to="">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="data">Data</NavLink>
        </li>
        <li>
          <NavLink to="form">Form</NavLink>
        </li>
      </ul>
      <div className="p-20">
        <h2 className="mb-20">Profile</h2>

        <Suspense fallback={<small>Loading</small>}>
          <Await resolve={recipes} errorElement={<h3>Error fetch</h3>}>
            <Recipes />
          </Await>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default Profile;
