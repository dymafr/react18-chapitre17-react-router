// import { createRecipe } from "../apis/recipes";
// import { redirect } from "react-router-dom";

export async function profileFormAction({ request, params }) {
  console.log(request);
  const data = await request.formData();
  console.log(Object.fromEntries(data));
  return { ok: true };
  //   const response = await createRecipe(data);
  // if (response.ok) {
  // return redirect("/");
  // } else {
  // return { error: response.message };
  // }
}
