export async function homepageLoader({ params, request }) {
  const url = new URL(request.url);
  console.log(url.searchParams.get("name"));
  const response = await fetch("https://restapi.fr/api/recipes");
  if (response.ok) {
    return response;
    // throw new Error("Oops");
    // return new Promise((res) => {
    //   setTimeout(() => {
    //     res(body);
    //   }, 3000);
    // });
  } else {
    throw new Error("something went wrong");
  }
}
