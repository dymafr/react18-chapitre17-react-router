export async function homepageLoader({ params }) {
  const response = await fetch("https://restapi.fr/api/recipes");
  if (response.ok) {
    const body = await response.json();
    return body;
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
