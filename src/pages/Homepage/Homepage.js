import { useLoaderData } from "react-router-dom";

function Homepage() {
  const recipes = useLoaderData();

  return (
    <>
      <h2>Homepage</h2>
      <ul>{recipes && recipes.map((r) => <li key={r._id}>{r.title}</li>)} </ul>
    </>
  );
}

export default Homepage;
