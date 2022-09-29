import { NavLink, Outlet } from "react-router-dom";

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

  // const user = useLoaderData();
  // const { user } = useOutletContext();

  // console.log(user);

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
        <Outlet />
      </div>
    </>
  );
}

export default Profile;
