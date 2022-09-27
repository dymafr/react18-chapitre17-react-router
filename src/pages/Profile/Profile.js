import { NavLink, Outlet } from "react-router-dom";

function Profile() {
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
      </ul>
      <div className="p-20">
        <h2 className="mb-20">Profile</h2>
        <Outlet />
      </div>
    </>
  );
}

export default Profile;
