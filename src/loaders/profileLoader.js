import { redirect } from "react-router-dom";
import { isLoggedin } from "../apis/auth";
import { getRecipes } from "../apis/recipes";

export async function profileLoader({ params, request }) {
  const recipes = await getRecipes();
  if (await isLoggedin()) {
    return recipes;
  } else {
    return redirect("/");
  }
}
