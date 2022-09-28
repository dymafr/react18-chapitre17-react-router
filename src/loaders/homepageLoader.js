export async function homepageLoader({ params }) {
  const response = await fetch("https://restapi.fr/api/recipes");
  if (response.ok) {
    return response.json();
  }
}
